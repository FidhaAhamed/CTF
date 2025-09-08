import React from "react";

export default function StarrySky() {
  // "HOMER" constellation stars
  const specialStars = [
    { x: "50px", y: "50px", letter: "H" },
    { x: "120px", y: "100px", letter: "O" },
    { x: "200px", y: "150px", letter: "M" },
    { x: "280px", y: "80px", letter: "E" },
    { x: "360px", y: "140px", letter: "R" },
  ];

  // Random filler stars
  const randomStars = Array.from({ length: 80 }, () => ({
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
  }));

  return (
    <div className="absolute inset-0">
      {[...randomStars, ...specialStars].map((star, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: star.x,
            top: star.y,
            boxShadow: "0 0 8px #fff",
            animation: "twinkle 2s infinite ease-in-out",
          }}
        >
          {star.letter && (
            <span className="absolute -top-6 left-[-4px] text-yellow-400 text-sm opacity-0 hover:opacity-100 transition-opacity">
              {star.letter}
            </span>
          )}
        </div>
      ))}

      {/* Twinkle animation */}
      <style>{`
        @keyframes twinkle {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
          }
          50% {
            transform: scale(1.3);
            opacity: 1;
            box-shadow: 0 0 15px rgba(255, 255, 200, 1);
          }
        }
      `}</style>
    </div>
  );
}
<style>{`
  @keyframes twinkle {
    0%, 100% {
      transform: scale(1);
      opacity: 0.8;
      box-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
    }
    50% {
      transform: scale(1.3);
      opacity: 1;
      box-shadow: 0 0 15px rgba(255, 255, 200, 1);
    }
  }
`}</style>
