import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

export default function Congrats() {
  const [rows, setRows] = useState([]);
  const username = localStorage.getItem("ctf_username") || "";

  useEffect(() => {
    if (!username) return;
    fetch(`${API_URL}/api/status/${encodeURIComponent(username)}`)
      .then(r=>r.json())
      .then(d=>setRows(d.submissions||[]))
      .catch(()=>{});
  }, [username]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-neutral-900 rounded-2xl border border-neutral-800 p-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          Congratulations!
        </h1>
        <p className="text-neutral-300 mt-2">
          You reached the end. Below are your recorded codes/timestamps.
        </p>

        <div className="mt-6 border border-neutral-800 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-neutral-800/60">
              <tr>
                <th className="text-left p-3">Challenge</th>
                <th className="text-left p-3">Code</th>
                <th className="text-left p-3">Timestamp (UTC)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(r=>(
                <tr key={r.id} className="border-t border-neutral-800">
                  <td className="p-3 capitalize">{r.challenge_name}</td>
                  <td className="p-3">{r.code}</td>
                  <td className="p-3">{new Date(r.timestamp).toISOString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <a
          href={`data:text/plain;charset=utf-8,${encodeURIComponent(JSON.stringify(rows,null,2))}`}
          download="my-codes.json"
          className="inline-block mt-6 rounded-lg bg-neutral-800 hover:bg-neutral-700 px-4 py-2"
        >
          Download my codes
        </a>
      </div>
    </div>
  );
}
