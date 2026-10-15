Multi-Cloud Misconfiguration Scanner — Streamlit Cloud deployment

This public deployment repository contains the scanner wheel and full source archive as numbered parts.
The Streamlit entry point is streamlit_app.py. It preserves the Motion React dashboard, FastAPI-backed workflows, offline fixtures, and one-time live AWS/Azure/GCP scans.
Set MCSCAN_ADMIN_EMAIL and MCSCAN_ADMIN_PASSWORD in Streamlit Cloud app secrets before using the app.
For durable multi-user accounts and scan history, also set DATABASE_URL to a PostgreSQL connection string.

The Streamlit entry point verifies and assembles `mcscan-wheel-01.bin` through `mcscan-wheel-05.bin` before loading the scanner. To reconstruct the complete source archive locally, concatenate `mcscan-source-01.bin` through `mcscan-source-07.bin` in numeric order. Its SHA-256 is `e4fa7919c2e2a1847276c079d90c5997aed102cf26ff22a9c31d127040ed95a7`.

To scan a real account, sign in and open **Cloud connections → Scan a live account**. Enter read-only credentials for AWS, Azure, or GCP. They are used for that scan only and are not saved in reports or the database. For detailed input and permission guidance, see README.md inside the source archive. Existing cloud usage may incur provider charges.
