import ChallengePage from "../components/ChallengePage";
const NAME="zeus", NUMBER=6, TITLE="Zeus";
const HASH="5c7906a3b838872ecf7c82d2b0910e56034f95081333d8e2a07a7330f4e60dc1";
const CODE="k";
export default function Zeus(){return <ChallengePage title={TITLE} name={NAME} number={NUMBER} hash={HASH} code={CODE} nextRoute="/challenge/Hermes" />;}
