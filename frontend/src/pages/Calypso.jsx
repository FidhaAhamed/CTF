import { useEffect } from "react";
import ChallengePage from "../components/ChallengePage";

const NAME = "calypso";
const NUMBER = 8;
const TITLE = "Calypso";
const HASH =
  "0d1af12ee692bc4bac27e99603f21771dd617d9b3d5f4748e89abf1d46243dfb";
const CODE = "Q";

// --- Hidden obfuscated password ---
const HiddenPassword = () => {
  useEffect(() => {
    (function () {
      // original password
      const password = "odysseyacrostime";

      // Encode the password using Base64
      const encoded = btoa(password); // "b2R5c3NleWFjcm9zc3RpbWU="

      // Some random decoy strings
      const decoys = [
        "x9v2l8k1m",
        "randomtext123",
        "fooBarBaz!",
        "loremIpsum",
        "qwerty987",
      ];

      // Mix the password with decoys
      const mixed = [...decoys, encoded]
        .sort(() => Math.random() - 0.5) // shuffle
        .join(" | "); // separate with |
      
      // Create hidden span
      const span = document.createElement("span");
      span.id = "titleBase64";
      span.style.color = "white"; // invisible on white background
      span.style.fontSize = "1px"; // tiny text
      span.textContent = mixed;

      // Append to body (so visible in Elements)
      document.body.appendChild(span);
    })();
  }, []);

  return null; // nothing rendered directly
};

export default function Calypso() {
  return (
    <>
      {/* Challenge page */}
      <ChallengePage
        title={TITLE}
        name={NAME}
        number={NUMBER}
        hash={HASH}
        code={CODE}
        nextRoute="/challenge/Circe"
      />
      <HiddenPassword />
    </>
  );
}
