import ChallengePage from "../components/ChallengePage";
const NAME="wolf", NUMBER=5, TITLE="Wolf";
const HASH="1206ed3c69d188d2fc75dd2ef8c4b4ec99e3ab084c16a03701d396850e7bcb47";
const CODE="Z";
export default function Wolf(){return <ChallengePage title={TITLE} name={NAME} number={NUMBER} hash={HASH} code={CODE} nextRoute="/challenge/6" />;}
