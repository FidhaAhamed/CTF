// Example: Odysseus.jsx
import ChallengePage from "../components/ChallengePage";

const NAME = "odysseus";
const NUMBER = 1;
const TITLE = "Odysseus";
const HASH = "bc1ae6b7dda77e51f6c6ce8f13b8214790594856759d98bc4adbc9d09217d447";
const CODE = "H";

export default function Odysseus() {
  return (
    <ChallengePage
      title={TITLE}
      name={NAME}
      number={NUMBER}
      hash={HASH}
      code={CODE}
      nextRoute="/challenge/Penelope"
    />
  );
}
