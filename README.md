Multi-Cloud Misconfiguration Scanner — Streamlit Cloud deployment

This private deployment repository contains the installable scanner wheel and the full source archive.
The Streamlit entry point is streamlit_app.py. It preserves the Motion React dashboard, FastAPI-backed workflows, and the offline AWS/Azure/GCP scanner.
Set MCSCAN_ADMIN_EMAIL and MCSCAN_ADMIN_PASSWORD in Streamlit Cloud app secrets before using the app.
For durable multi-user accounts and scan history, also set DATABASE_URL to a PostgreSQL connection string.

Source: mcscan-source.zip
