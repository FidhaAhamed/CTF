import { useEffect } from "react";
import ChallengePage from "../components/ChallengePage";

const NAME = "hermes";
const NUMBER = 7;
const TITLE = "Hermes";
const HASH =
  "48398245bb0dcfead2309ac3272f399c26fd8964b8919e049001ffc78159bc28";
const CODE = "&";

// Layer-encoded flag (thisflagisincorrect → reversed → Base64)
const HIDDEN_FLAG = "dGNlcnJvY25pc2dhbGZzaWh0";

export default function Hermes() {
  useEffect(() => {
    const konami = [
      "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
      "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
      "b", "a"
    ];
    let entered = [];

    const handler = (e) => {
      entered.push(e.key);
      if (entered.length > konami.length) {
        entered.shift();
      }

      if (JSON.stringify(entered) === JSON.stringify(konami)) {
        // Step 1: Base64 decode
        const step1 = atob(HIDDEN_FLAG); // "tcerrocnisgalfsiht"

        // Step 2: Reverse string
        const flag = step1.split("").reverse().join(""); // "thisflagisincorrect"

        const message = `🎉 Congrats! You have found the password.\n\nThe password is: ${flag}`;
        alert(message);
        console.log(message);
      }
    };

    document.addEventListener("keydown", handler);

    // Console helper
    window.checkClue = () => {
      const clue = document.getElementById("konami-instructions")?.innerText;
      if (clue) {
        console.log("👀 Hidden Clue:", clue);
        return clue;
      } else {
        console.log("No clue found!");
      }
    };

    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* Hidden instruction */}
      <h2
        id="konami-instructions"
        style={{
          color: "white",     // looks white in DOM
          opacity: 0,         // invisible on screen
          userSelect: "none", // can't highlight
          pointerEvents: "none" // can’t click/select
        }}
      >
        ↑ ↑ ↓ ↓ ← → ← → b a     </h2>

      <ChallengePage
        title={TITLE}
        name={NAME}
        number={NUMBER}
        hash={HASH}
        code={CODE}
        nextRoute="/challenge/Calypso"
      />
    </>
  );
}