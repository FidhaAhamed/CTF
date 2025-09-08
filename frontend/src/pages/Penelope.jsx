import ChallengePage from "../components/ChallengePage";

const NAME = "penelope",
  NUMBER = 2,
  TITLE = "Penelope";
const HASH =
  "04d75cde9beeb4d14f7f4e95dab88b6f9398f71eb837000c2cffc1600418a1e0";
const CODE = "g";

export default function Penelope() {
  return (
    <>
      <ChallengePage
        title={TITLE}
        name={NAME}
        number={NUMBER}
        hash={HASH}
        code={CODE}
        nextRoute="/challenge/Telemachus"
      />

      {/* Hidden stego image (players will only see it in source/inspect) */}
      <img
        src="../public/yourhiddenpasswordisherecheckitout.png"
        alt="hidden"
        style={{ display: "none" }}
      />
    </>
  );
}
