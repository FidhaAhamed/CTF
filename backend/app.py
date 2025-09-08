import os
from flask import Flask, request, jsonify, Response
from dotenv import load_dotenv
from supabase import create_client, Client
from datetime import datetime, timezone
from pathlib import Path

# Load environment variables (parent folder .env)
dotenv_path = Path(__file__).resolve().parents[1] / ".env"
if dotenv_path.exists():
    load_dotenv(dotenv_path=dotenv_path)
    print(f"✅ Loaded .env from: {dotenv_path}")
else:
    print("⚠️ No .env file found, relying on Render environment variables.")

# Flask app
app = Flask(__name__)

# Supabase client
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_SERVICE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    raise RuntimeError("❌ SUPABASE_URL or SUPABASE_SERVICE_KEY not set!")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)


# Helper: parse CHALLENGE_HASHES and CHALLENGE_CODES from env
def parse_map(env_value: str):
    m = {}
    if not env_value:
        return m
    parts = [p.strip() for p in env_value.split(",") if p.strip()]
    for p in parts:
        if ":" in p:
            k, v = p.split(":", 1)
            m[k.strip()] = v.strip()
    return m


CHALLENGE_HASHES = parse_map(os.environ.get("CHALLENGE_HASHES", ""))
CHALLENGE_CODES = parse_map(os.environ.get("CHALLENGE_CODES", ""))


# Middleware: Add CORS headers
@app.after_request
def add_cors_headers(resp: Response):
    resp.headers["Access-Control-Allow-Origin"] = os.environ.get("CORS_ORIGIN", "*")
    resp.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    resp.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    return resp


# Route: Submit challenge solution
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

    now = datetime.now(timezone.utc).isoformat()
    try:
        supabase.table("submissions").insert({
            "username": username,
            "challenge_name": challenge_name,
            "code": code,
            "timestamp": now
        }, count="exact").execute()
    except Exception as e:
        print(f"⚠️ Insert error (probably duplicate): {e}")

    return jsonify({"success": True, "code": code})


# Route: Get status of submissions for a user
@app.route("/api/status/<username>", methods=["GET"])
def status(username):
    username = username.strip()
    if not username:
        return jsonify({"submissions": []})

    res = supabase.table("submissions").select("*").eq(
        "username", username
    ).order("timestamp", desc=False).execute()

    rows = res.data or []
    return jsonify({"submissions": rows})


# Local run
if __name__ == "__main__":
    port = int(os.environ.get("PORT", "5000"))
    debug = bool(int(os.environ.get("FLASK_DEBUG", "1")))
    print(f"🚀 Running Flask on http://localhost:{port} (debug={debug})")
    app.run(host="0.0.0.0", port=port, debug=debug)
