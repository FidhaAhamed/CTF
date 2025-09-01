// Example: Rat.jsx
import ChallengePage from "../components/ChallengePage";

const NAME = "rat";
const NUMBER = 1;
const TITLE = "Rat";
const HASH = "bc1ae6b7dda77e51f6c6ce8f13b8214790594856759d98bc4adbc9d09217d447";
const CODE = "H";

export default function Rat() {
  return (
    <ChallengePage
      title={TITLE}
      name={NAME}
      number={NUMBER}
      hash={HASH}
      code={CODE}
      nextRoute="/challenge/cat"
    />
  );
}
