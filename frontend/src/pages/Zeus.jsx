// Zeus.jsx
import ChallengeContainer from "../components/ChallengeContainer";

const NAME = "zeus";
const NUMBER = 6;
const TITLE = "Zeus";
const NEXT_ROUTE = "/challenge/hermes";

const obfuscatedCode = `
function _0x41ab(_0x4b6ca8,_0x2172f7){var _0x330621=_0x3306();return _0x41ab=function(_0x41ab2f,_0x4f04f1){_0x41ab2f=_0x41ab2f-0x6a;var _0xc12ba9=_0x330621[_0x41ab2f];return _0xc12ba9;},_0x41ab(_0x4b6ca8,_0x2172f7);}function _0x3306(){var _0x473db0=['log','21445dvcWgh','8708008LNzghm','Decoded\x20password\x20is:\x20vitruvianmatrix','28617516hnjdsU','2wSvdvF','1028046LFsWmB','5QSkAgC','710304Iqvemk','4800672mZffFY','1763560pVtpoL'];_0x3306=function(){return _0x473db0;};return _0x3306();}(function(_0x50014d,_0x59023a){var _0x2c60fe=_0x41ab,_0x311d54=_0x50014d();while(!![]){try{var _0x57b5c3=-parseInt(_0x2c60fe(0x6c))/0x1*(parseInt(_0x2c60fe(0x70))/0x2)+-parseInt(_0x2c60fe(0x74))/0x3+parseInt(_0x2c60fe(0x6a))/0x4+-parseInt(_0x2c60fe(0x72))/0x5*(parseInt(_0x2c60fe(0x71))/0x6)+parseInt(_0x2c60fe(0x73))/0x7+-parseInt(_0x2c60fe(0x6d))/0x8+parseInt(_0x2c60fe(0x6f))/0x9;if(_0x57b5c3===_0x59023a)break;else _0x311d54['push'](_0x311d54['shift']());}catch(_0x179b67){_0x311d54['push'](_0x311d54['shift']());}}}(_0x3306,0xcd37f),(function(){var _0x1e0469=_0x41ab;console[_0x1e0469(0x6b)](_0x1e0469(0x6e));}()));
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
