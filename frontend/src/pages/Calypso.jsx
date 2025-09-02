import ChallengePage from "../components/ChallengePage";
const NAME="calypso", NUMBER=8, TITLE="Calypso";
const HASH="e6f50dd856211332b5ab10839a8447aef1debbad5d02b327eac1ef40091f877c";
const CODE="Q";
export default function Calypso(){return <ChallengePage title={TITLE} name={NAME} number={NUMBER} hash={HASH} code={CODE} nextRoute="/challenge/Circe" />;}
