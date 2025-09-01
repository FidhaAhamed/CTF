import ChallengePage from "../components/ChallengePage";
const NAME="owl", NUMBER=4, TITLE="Owl";
const HASH="4123379170ebadc55e5d4a6c0c8f64d019dd5fc6088c086ad89b22816cc55a4a";
const CODE="%";
export default function Owl(){return <ChallengePage title={TITLE} name={NAME} number={NUMBER} hash={HASH} code={CODE} nextRoute="/challenge/5" />;}
