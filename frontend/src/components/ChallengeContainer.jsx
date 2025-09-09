import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ChallengeContainer({
  title,
  name,
  number,
  nextRoute,
  specialSubmit, // optional special submit handler for custom logic
}) {
  const [value, setValue] = useState("");
  const [err, setErr] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [codeText, setCodeText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Clue: 10.0539° N, 76.6193° E");
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setErr("");

    if (specialSubmit) {
      specialSubmit(value.trim(), setErr, setShowCode, setCodeText, navigate);
    } else {
      if (value.trim()) {
        navigate(nextRoute);
      } else {
        setErr("Please enter a value");
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <form
        onSubmit={onSubmit}
        className="space-y-4 p-6 rounded-xl bg-neutral-900 shadow-xl max-w-xl w-full"
      >
        <h1 className="text-2xl font-bold mb-4">{`Challenge ${number}: ${title}`}</h1>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type your answer here"
          className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-white"
          required
          autoComplete="off"
        />
        {err && <p className="text-red-400 text-sm font-semibold">{err}</p>}
        <button
          type="submit"
          className="w-full rounded-lg bg-red-600 hover:bg-red-700 px-4 py-3 font-semibold"
        >
          Submit
        </button>
      </form>

      {showCode && (
        <pre
          className="bg-neutral-800 p-6 rounded-xl max-w-xl mt-6 overflow-x-auto text-sm whitespace-pre-wrap font-mono"
          style={{ fontFamily: "Source Code Pro, monospace" }}
        >
          {codeText}
        </pre>
      )}
    </div>
  );
}
