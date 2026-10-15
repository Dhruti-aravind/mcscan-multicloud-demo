"""Streamlit Community Cloud entry point for the existing Motion + FastAPI demo.

The React dashboard uses a Streamlit Components v2 bridge. Each browser session
gets its own in-process TestClient, while the existing FastAPI app enforces
authentication, CSRF, administrator privileges, and scan ownership.
"""
from __future__ import annotations

import hashlib
import io
import os
import sys
import zipfile
from pathlib import Path

import streamlit as st
from fastapi.testclient import TestClient

st.set_page_config(
    page_title="mcscan — Cloud security, in focus.",
    page_icon="☁️",
    layout="wide",
    initial_sidebar_state="collapsed",
)


@st.cache_resource
def scanner_package():
    """Load a checksum-verified wheel split for GitHub's browser upload limit."""
    root = Path(__file__).resolve().parent
    parts = [root / f"mcscan-wheel-{index:02d}.bin" for index in range(1, 6)]
    if not any(part.exists() for part in parts):
        return None  # A normal local installation uses requirements.txt instead.
    if not all(part.exists() for part in parts):
        st.error("The scanner package upload is incomplete.")
        st.stop()
    wheel = b"".join(part.read_bytes() for part in parts)
    expected = "f31584367d5febbec35e0eb7e56993ecd03a798c1280c91d8148dc31259a628f"
    if hashlib.sha256(wheel).hexdigest() != expected:
        st.error("The scanner package checksum does not match.")
        st.stop()
    target = root / ".data" / f"mcscan-runtime-{expected[:12]}"
    if not (target / ".ready").exists():
        target.mkdir(parents=True, exist_ok=True)
        with zipfile.ZipFile(io.BytesIO(wheel)) as archive:
            archive.extractall(target)
        (target / ".ready").write_text(expected, encoding="ascii")
    if str(target) not in sys.path:
        sys.path.insert(0, str(target))
    return target


scanner_package()
from mcscan.web.app import NewUser, create_app


@st.cache_resource
def application():
    """Share only the data store; each Streamlit session owns its HTTP client."""
    app = create_app(db_path=os.getenv("MCSCAN_DB", ".data/streamlit.db"))
    email = os.getenv("MCSCAN_ADMIN_EMAIL", "").strip().lower()
    password = os.getenv("MCSCAN_ADMIN_PASSWORD", "")
    if email and password:
        body = NewUser(email=email, name=os.getenv("MCSCAN_ADMIN_NAME", "Administrator"),
                       password=password)
        with app.state.store.connect() as con:
            has_admin = con.execute("SELECT 1 FROM app_users WHERE role='admin'").fetchone()
        if not has_admin:
            app.state.store.add_user(body.email, body.name, body.password, "admin")
    return app


app = application()
with app.state.store.connect() as connection:
    configured = connection.execute("SELECT 1 FROM app_users WHERE role='admin'").fetchone()
if not configured:
    st.error("The administrator is not configured yet.")
    st.info("Set MCSCAN_ADMIN_EMAIL and MCSCAN_ADMIN_PASSWORD (12+ characters) "
            "in Streamlit Cloud’s app secrets, then reboot the app.")
    st.stop()

if "mcscan_client" not in st.session_state:
    st.session_state.mcscan_client = TestClient(app)
if "mcscan_reply" not in st.session_state:
    st.session_state.mcscan_reply = None
if "mcscan_last_request_id" not in st.session_state:
    st.session_state.mcscan_last_request_id = None

st.markdown("""
<style>
  [data-testid="stHeader"], [data-testid="stToolbar"], footer {display:none!important}
  [data-testid="stAppViewContainer"] {background:#0b0e0c}
  [data-testid="stMainBlockContainer"] {max-width:none!important;padding:0!important}
  [data-testid="stVerticalBlock"] {gap:0!important}
  [data-testid="stElementContainer"] {width:100%!important}
</style>
""", unsafe_allow_html=True)

dashboard = st.components.v2.component(
    "mcscan.dashboard",
    html='<div class="react-root"></div>',
    css="streamlit.css",
    js="streamlit.js",
)
result = dashboard(
    key="mcscan_dashboard",
    data={"reply": st.session_state.mcscan_reply},
    on_request_change=lambda: None,
)

if result.request and result.request.get("id") != st.session_state.mcscan_last_request_id:
    message = result.request
    st.session_state.mcscan_last_request_id = message.get("id")
    path = message.get("path", "")
    method = message.get("method", "GET").upper()
    if not path.startswith("/") or path.startswith("//") or method not in ("GET", "POST", "PATCH"):
        st.session_state.mcscan_reply = {
            "id": message.get("id"), "status": 400, "error": "Invalid dashboard request",
        }
    else:
        response = st.session_state.mcscan_client.request(
            method, "/api" + path,
            content=message.get("body"),
            headers={"x-csrf-token": message.get("csrf", ""),
                     "content-type": "application/json"},
        )
        reply = {"id": message["id"], "status": response.status_code}
        if "/export/" in path and response.is_success:
            reply.update({"content": response.text,
                          "mime": response.headers.get("content-type", "text/plain")})
        else:
            try:
                body = response.json()
            except ValueError:
                body = {"detail": response.text or "Request failed"}
            reply["body"] = body
            if not response.is_success:
                detail = body.get("detail", "Request failed") if isinstance(body, dict) else body
                reply["error"] = str(detail)
        st.session_state.mcscan_reply = reply
    st.rerun()
