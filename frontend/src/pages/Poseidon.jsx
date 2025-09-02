import ChallengePage from "../components/ChallengePage";
const NAME="poseidon", NUMBER=5, TITLE="Poseidon";
const HASH="1206ed3c69d188d2fc75dd2ef8c4b4ec99e3ab084c16a03701d396850e7bcb47";
const CODE="Z";
export default function Poseidon(){return <ChallengePage title={TITLE} name={NAME} number={NUMBER} hash={HASH} code={CODE} nextRoute="/challenge/Zeus" />;}
