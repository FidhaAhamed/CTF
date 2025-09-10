import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Correct for Vite + React

const NAME = "telemachus";
const NUMBER = 3;
const TITLE = "Telemachus";
const HASH = "826457e1f6810cda018196cd7631b6a5e7a03644a91fbc599c7613ab9008f603";
const CODE = "@";
const PASSWORD = "catchmeifyoucan";

const SCRAMBLED = ["m","a","c","n","f","y","c","t","h","o","u","a","c","e","i"];

export default function Telemachus() {
  const [input, setInput] = useState("");
  const navigate = useNavigate(); // ✅ Hook from react-router-dom

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value.slice(0, PASSWORD.length));
  };

  useEffect(() => {
    if (input === PASSWORD) {
      setTimeout(() => {
        navigate("/challenge/Athena"); // ✅ Navigate to next route
      }, 500);
    }
  }, [input, navigate]);

  const getLetterDisplay = (index) => {
    if (index >= input.length) {
      return "_";
    }
    const typedLetter = input[index];
    const correctLetter = PASSWORD[index];
    if (typedLetter === correctLetter) {
      return (
        <span key={index} className="text-green-500">
          {typedLetter}
        </span>
      );
    } else {
      return (
        <span key={index} className="text-red-500">
          {typedLetter}
        </span>
      );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-red-500 mb-6">Challenge 3: Telemachus</h1>
      <div className="bg-neutral-900 rounded-2xl border border-neutral-800 p-8 shadow-xl max-w-md w-full text-center">
        <h2 className="text-lg font-semibold mb-4">Enter the password!</h2>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="flag"
        />
        <div className="mt-6 text-2xl font-mono tracking-widest text-yellow-400">
          {Array.from({ length: PASSWORD.length }, (_, index) => (
            <span key={index} className="inline-block w-6">
              {getLetterDisplay(index)}
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: "none" }}>
        {SCRAMBLED.map((ch, i) => (
          <span key={i}>{ch}</span>
        ))}
      </div>
    </div>
  );
}
