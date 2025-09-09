import os
from flask import Flask, request, jsonify, Response
from dotenv import load_dotenv
from supabase import create_client, Client
from datetime import datetime, timezone
from pathlib import Path

# Load environment variables (try local .env first, then Render env vars)
try:
    dotenv_path = Path(__file__).resolve().parents[1] / ".env"
    if dotenv_path.exists():
        load_dotenv(dotenv_path=dotenv_path)
        print(f"✅ Loaded .env from: {dotenv_path}")
    else:
        print("⚠️ No local .env file found, using environment variables.")
except Exception as e:
    print(f"⚠️ Error loading .env: {e}, using environment variables.")

# Flask app
app = Flask(__name__)

# Add a root route for health check
@app.route("/", methods=["GET"])
def health_check():
    return jsonify({"message": "CTF Backend is running!", "status": "healthy"})

# Supabase client
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_SERVICE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    print("❌ Warning: SUPABASE_URL or SUPABASE_SERVICE_KEY not set!")
    # Don't raise error immediately for deployment, let it start and show in logs
else:
    try:
        supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
        print("✅ Supabase client initialized successfully")
    except Exception as e:
        print(f"❌ Error creating Supabase client: {e}")
        supabase = None

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

print(f"📋 Loaded {len(CHALLENGE_HASHES)} challenge hashes")
print(f"📋 Loaded {len(CHALLENGE_CODES)} challenge codes")

# Middleware: Add CORS headers (allow your frontend domain)
@app.after_request
def add_cors_headers(resp: Response):
    # Allow your frontend domain - update this with your actual frontend URL
    allowed_origins = [
        "http://localhost:5173",  # Local Vite dev server
        "http://localhost:3000",  # Local React dev server
        os.environ.get("FRONTEND_URL", ""),  # Your deployed frontend URL
        "*"  # Remove this in production, use specific domain
    ]
    
    origin = request.headers.get('Origin')
    if origin in allowed_origins or "*" in allowed_origins:
        resp.headers["Access-Control-Allow-Origin"] = origin or "*"
    
    resp.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    resp.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    resp.headers["Access-Control-Allow-Credentials"] = "true"
    return resp

# Handle preflight requests
@app.before_request
def handle_preflight():
    if request.method == "OPTIONS":
        response = Response()
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add('Access-Control-Allow-Headers', "*")
        response.headers.add('Access-Control-Allow-Methods', "*")
        return response

# Route: Submit challenge solution
@app.route("/api/submit", methods=["POST", "OPTIONS"])
def submit():
    if request.method == "OPTIONS":
        return ("", 204)

    if not supabase:
        return jsonify({"success": False, "error": "Database not available"}), 500

    data = request.get_json(force=True, silent=True) or {}
    username = (data.get("username") or "").strip()
    challenge_name = (data.get("challenge_name") or "").strip()
    client_hash = (data.get("client_hash") or "").strip()

    print(f"📥 Submit request: {username} - {challenge_name}")

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
        print(f"✅ Successfully recorded submission for {username}")
    except Exception as e:
        print(f"⚠️ Insert error (probably duplicate): {e}")

    return jsonify({"success": True, "code": code})

# Route: Get status of submissions for a user
@app.route("/api/status/<username>", methods=["GET"])
def status(username):
    if not supabase:
        return jsonify({"submissions": [], "error": "Database not available"})

    username = username.strip()
    if not username:
        return jsonify({"submissions": []})

    try:
        res = supabase.table("submissions").select("*").eq(
            "username", username
        ).order("timestamp", desc=False).execute()

        rows = res.data or []
        print(f"📊 Status request for {username}: {len(rows)} submissions")
        return jsonify({"submissions": rows})
    except Exception as e:
        print(f"❌ Error fetching status: {e}")
        return jsonify({"submissions": [], "error": "Database error"}), 500

# Route: Get all challenges (for frontend)
@app.route("/api/challenges", methods=["GET"])
def challenges():
    return jsonify({
        "challenges": list(CHALLENGE_HASHES.keys()),
        "total": len(CHALLENGE_HASHES)
    })

# Error handler
@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Endpoint not found"}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({"error": "Internal server error"}), 500

# Run the app
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    debug = os.environ.get("FLASK_ENV") != "production"
    print(f"🚀 Starting Flask server on port {port} (debug={debug})")
    print(f"🌐 Environment: {os.environ.get('FLASK_ENV', 'development')}")
    app.run(host="0.0.0.0", port=port, debug=debug)