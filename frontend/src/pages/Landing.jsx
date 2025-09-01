import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("ctf_username");
    if (saved) setUsername(saved);
  }, []);

  const start = () => {
    if (!username.trim()) return;
    localStorage.setItem("ctf_username", username.trim());
    navigate("/challenge/rat");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-neutral-900 rounded-2xl border border-neutral-800 p-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
          Welcome to the CTF
        </h1>
        <p className="text-neutral-300 mt-2">Enter your username/team to start.</p>

        <div className="mt-6 space-y-4">
          <input
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="username / team"
          />
          <button
            onClick={start}
            className="w-full rounded-lg bg-red-600 hover:bg-red-700 transition px-4 py-3 font-semibold"
          >
            Start Challenge 1
          </button>
        </div>
      </div>
    </div>
  );
}
