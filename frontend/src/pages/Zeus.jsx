// Zeus.jsx
import ChallengeContainer from "../components/ChallengeContainer";

const NAME = "zeus";
const NUMBER = 6;
const TITLE = "Zeus";
const NEXT_ROUTE = "/challenge/hermes";

const obfuscatedCode = `
(function(){
  var _0x4f12 = ['vi', 'tru', 'vian', 'mat', 'rix'];
  var pass = _0x4f12[0] + _0x4f12[1] + _0x4f12[2] + _0x4f12[3] + _0x4f12[4];
  console.log("Decoded password is:", pass);
  return pass;
})();
`;

export default function Zeus() {
  const specialSubmit = (input, setErr, setShowCode, setCodeText, navigate) => {
    const normalized = input.toLowerCase().trim();

    if (normalized.includes("mar athanasius")) {
      // Show the obfuscated code as a hint
      setShowCode(true);
      setCodeText(obfuscatedCode);
      setErr("");
    } else if (normalized === "vitruvianmatrix") {
      // Correct final password, navigate to next challenge
      setShowCode(false);
      setCodeText("");
      setErr("");
      navigate(NEXT_ROUTE);
    } else {
      setShowCode(false);
      setCodeText("");
      setErr("Incorrect. Hint: Check the console for coordinates or decode the code.");
    }
  };

  return (
    <ChallengeContainer
      title={TITLE}
      name={NAME}
      number={NUMBER}
      nextRoute={NEXT_ROUTE}
      specialSubmit={specialSubmit}
    />
  );
}
