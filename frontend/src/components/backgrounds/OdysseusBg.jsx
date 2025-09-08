import { useEffect, useState } from "react";

export default function OdysseusBg({ children }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Stars that spell HOMER
    const clueStars = [
      { top: 100, left: 200, letter: "H" },
      { top: 200, left: 400, letter: "O" },
      { top: 300, left: 600, letter: "M" },
      { top: 150, left: 800, letter: "E" },
      { top: 250, left: 1000, letter: "R" },
    ];

    // Random filler stars
    const fillerStars = Array.from({ length: 50 }).map(() => ({
      top: Math.random() * height,
      left: Math.random() * width,
      letter: "",
    }));

    setStars([...clueStars, ...fillerStars]);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* background layer */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="star group"
            style={{ top: star.top, left: star.left, position: "absolute" }}
          >
            {star.letter && (
              <span className="absolute top-[-24px] left-1/2 -translate-x-1/2 text-pink-400 text-sm opacity-0 group-hover:opacity-100 transition">
                {star.letter}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* content layer */}
      <div className="relative z-10">{children}</div>

      <style>{`
        .star {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: white;
          box-shadow: 0 0 8px 3px white;
          animation: twinkle 2s infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
}
