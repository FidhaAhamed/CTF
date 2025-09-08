import ChallengeLogic from "../components/ChallengeLogic";
import ChallengeUI from "../components/ChallengeUI";
import OdysseusBg from "../components/backgrounds/OdysseusBg";

const NAME = "odysseus";
const NUMBER = 1;
const TITLE = "Odysseus";
const HASH = "2aaab795b3836904f82efc6ca2285d927aed75206214e1da383418eb90c9052f";
const CODE = "H";

export default function Odysseus() {
  return (
    <OdysseusBg>
      <ChallengeLogic
        title={TITLE}
        name={NAME}
        number={NUMBER}
        hash={HASH}
        code={CODE}
        nextRoute="/challenge/Penelope"
      >
        {(props) => <ChallengeUI {...props} title={TITLE} />}
      </ChallengeLogic>
    </OdysseusBg>
  );
}
