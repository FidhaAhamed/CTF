# CTF Backend (Flask + Supabase)

## Local setup

1. Python 3.11+
2. `python -m venv .venv && . .venv/Scripts/activate` (Windows) or `source .venv/bin/activate` (macOS/Linux)
3. `pip install -r requirements.txt`
4. Copy `.env.example` to `.env` and fill `SUPABASE_URL` + `SUPABASE_SERVICE_KEY`
5. Create the table in Supabase using `supabase_schema.sql`
6. Run: `flask --app app run`

## Endpoints

- `POST /api/submit`
  ```json
  { "username": "alice", "challenge_name": "rat", "client_hash": "<sha256>" }
  ```
