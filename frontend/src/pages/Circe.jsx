import ChallengePage from "../components/ChallengePage";
const NAME="circe", NUMBER=9, TITLE="Circe";
const HASH="6144545e67abcfeb8ce053127fc5189ea9f094454ec54ec9dd7bf1774d74d62d";
const CODE="*";
export default function Circe(){return <ChallengePage title={TITLE} name={NAME} number={NUMBER} hash={HASH} code={CODE} nextRoute="/challenge/Sirens" />;}
