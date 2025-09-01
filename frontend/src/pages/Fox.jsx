import ChallengePage from "../components/ChallengePage";
const NAME="fox", NUMBER=3, TITLE="Fox";
const HASH="f14e0ad501dab4ed8e4ff9e17150524338f9d9210d8af2656ba2481f30fb9265";
const CODE="@";
export default function Fox(){return <ChallengePage title={TITLE} name={NAME} number={NUMBER} hash={HASH} code={CODE} nextRoute="/challenge/owl" />;}
