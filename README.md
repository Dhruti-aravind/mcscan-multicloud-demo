Multi-Cloud Misconfiguration Scanner — Streamlit Cloud deployment

This public deployment repository contains the scanner package and full source archive as numbered parts.
The Streamlit entry point is streamlit_app.py. It verifies and loads the package, preserving the Motion React dashboard, FastAPI-backed workflows, offline fixtures, and one-time live AWS/Azure/GCP scans.
Set MCSCAN_ADMIN_EMAIL and MCSCAN_ADMIN_PASSWORD in Streamlit Cloud app secrets before using the app.
For durable multi-user accounts and scan history, also set DATABASE_URL to a PostgreSQL connection string.

See [LIVE_SCAN.md](LIVE_SCAN.md) for live-scan inputs and source archive reconstruction.

To scan a real account, sign in and open **Cloud connections → Scan a live account**. Enter read-only credentials for AWS, Azure, or GCP. They are used for that scan only and are not saved in reports or the database. For detailed input and permission guidance, see README.md inside the source archive. Existing cloud usage may incur provider charges.
