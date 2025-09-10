import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SHA256 from "crypto-js/sha256";
import PChallengeUI from "./PChallengeUI"; // Adjust path as needed

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

export default function ChallengePageHiddenError({ title, name, number, hash, code, nextRoute }) {
  const [value, setValue] = useState("");
  const [err, setErr] = useState("");
  const [showHiddenErr, setShowHiddenErr] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setShowHiddenErr(false);

    const clientHash = SHA256(value).toString();

    if (clientHash !== hash) {
      setErr("flag: spintoera");
      setShowHiddenErr(true);
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
      navigate(nextRoute);
    } catch {
      setErr("Network error — try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-neutral-900 rounded-2xl border border-neutral-800 p-8 shadow-xl">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
          {`Challenge ${number}: ${title}`}
        </h1>

        <PChallengeUI
          value={value}
          setValue={setValue}
          err={err}
          onSubmit={onSubmit}
          number={number}
          title={title}
          hiddenError={showHiddenErr}
        />

      </div>
    </div>
  );
}
