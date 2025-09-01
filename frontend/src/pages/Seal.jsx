import ChallengePage from "../components/ChallengePage";
const NAME="seal", NUMBER=8, TITLE="Seal";
const HASH="e6f50dd856211332b5ab10839a8447aef1debbad5d02b327eac1ef40091f877c";
const CODE="Q";
export default function Seal(){return <ChallengePage title={TITLE} name={NAME} number={NUMBER} hash={HASH} code={CODE} nextRoute="/challenge/9" />;}
