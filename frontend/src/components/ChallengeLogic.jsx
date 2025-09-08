import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SHA256 from "crypto-js/sha256";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

export default function ChallengeLogic({ name, number, hash, code, nextRoute, children }) {
  const [value, setValue] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");

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
      navigate(nextRoute);
    } catch {
      setErr("Network error — try again.");
    }
  };

  // children = UI function
  return children({ value, setValue, err, onSubmit, number, name, code });
}
