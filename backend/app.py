import os
from flask import Flask, request, jsonify
from flask import Response
from dotenv import load_dotenv
from supabase import create_client, Client
from datetime import datetime, timezone

from pathlib import Path
load_dotenv(dotenv_path=Path(__file__).resolve().parents[1] / ".env")


app = Flask(__name__)

SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_SERVICE_KEY")
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

def parse_map(env_value: str):
    m = {}
    if not env_value:
        return m
    parts = [p.strip() for p in env_value.split(",") if p.strip()]
    for p in parts:
        k, v = p.split(":", 1)
        m[k.strip()] = v.strip()
    return m

CHALLENGE_HASHES = parse_map(os.environ.get("CHALLENGE_HASHES", ""))
CHALLENGE_CODES  = parse_map(os.environ.get("CHALLENGE_CODES", ""))

@app.after_request
def add_cors_headers(resp: Response):
    # Simple CORS for local dev / Vercel frontend
    resp.headers["Access-Control-Allow-Origin"] = os.environ.get("CORS_ORIGIN", "*")
    resp.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    resp.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    return resp

@app.route("/api/submit", methods=["POST", "OPTIONS"])
def submit():
    if request.method == "OPTIONS":
        return ("", 204)
    data = request.get_json(force=True, silent=True) or {}
    username = (data.get("username") or "").strip()
    challenge_name = (data.get("challenge_name") or "").strip()
    client_hash = (data.get("client_hash") or "").strip()

    if not username or not challenge_name or not client_hash:
        return jsonify({"success": False, "error": "Missing fields"}), 400

    expected = CHALLENGE_HASHES.get(challenge_name)
    if not expected:
        return jsonify({"success": False, "error": "Unknown challenge"}), 400

    if client_hash != expected:
        return jsonify({"success": False, "error": "Incorrect"}), 400

    code = CHALLENGE_CODES.get(challenge_name, "?")

    # Upsert-like behavior: Insert only if not exists for (username, challenge_name)
    # Unique constraint is enforced in DB; on conflict do nothing.
    now = datetime.now(timezone.utc).isoformat()
    try:
        supabase.table("submissions").insert({
            "username": username,
            "challenge_name": challenge_name,
            "code": code,
            # timestamp is default now() in DB; sending for clarity too
            "timestamp": now
        }, count="exact").execute()
    except Exception:
        # Likely a duplicate due to unique constraint; ignore
        pass

    return jsonify({"success": True, "code": code})

@app.route("/api/status/<username>", methods=["GET"])
def status(username):
    username = username.strip()
    if not username:
        return jsonify({"submissions": []})
    # Return in ascending timestamp order
    res = supabase.table("submissions").select("*").eq("username", username).order("timestamp", desc=False).execute()
    rows = res.data or []
    return jsonify({"submissions": rows})

if __name__ == "__main__":
    app.run(port=int(os.environ.get("PORT", "5000")), debug=bool(int(os.environ.get("FLASK_DEBUG", "1"))))
