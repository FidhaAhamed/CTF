import ChallengePage from "../components/ChallengePage";
const NAME="athena", NUMBER=4, TITLE="Athena";
const HASH="f0483107f8792b3ecb4a07279debf58aa2c271d26f629c6495dc5f046b0555a0";
const CODE="%";
export default function Athena(){return <ChallengePage title={TITLE} name={NAME} number={NUMBER} hash={HASH} code={CODE} nextRoute="/challenge/Poseidon" />;}
