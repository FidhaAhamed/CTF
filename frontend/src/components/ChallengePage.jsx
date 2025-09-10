import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import SHA256 from "crypto-js/sha256";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

export default function ChallengePage({
  title,          // "Rat"
  name,           // "rat"
  number,         // 1..10
  hash,           // sha256 hex
  code,           // single char code
  nextRoute,      // "/challenge/2" or "/congrats"
}) {
  const [value, setValue] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const params = useParams(); // numeric alias also supported

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");

    // Instant client-side check
    const clientHash = SHA256(value).toString();
    if (clientHash !== hash) {
      setErr("Incorrect — try again.");
      return;
    }

    const username = localStorage.getItem("ctf_username") || "";
    if (!username) {
      setErr("Please set your username on the landing page.");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, challenge_name: name, client_hash: clientHash }),
      });
      const data = await res.json();
      if (!data.success) {
        setErr(data.error || "Server rejected the submission.");
        return;
      }
      // Optionally show data.code (single-char)
      navigate(nextRoute);
    } catch (e) {
      setErr("Network error — try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-neutral-900 rounded-2xl border border-neutral-800 p-8 shadow-xl">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
          {`Challenge ${number}: ${title}`}
        </h1>

        {/* Clue placeholder — you can hide fun stuff in the DOM here */}
        {/* TODO: Add subtle clue: data-clue="..." or background-image trick */}

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <label className="block text-sm text-neutral-300">Enter password / flag</label>
          <input
            type="password"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="flag"
            required
          />
          {err && <p className="text-red-400 text-sm">{err}</p>}
          <button
            type="submit"
            className="w-full rounded-lg bg-red-600 hover:bg-red-700 transition px-4 py-3 font-semibold"
          >
            Submit
          </button>
        </form>

        </div>
    </div>
  );
}
