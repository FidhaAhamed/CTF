import ChallengePage from "../components/ChallengePage";
const NAME="puma", NUMBER=10, TITLE="Puma";
const HASH="963a55ae33c1c9a6a25f582c561a1957760c06d2859852d5818eb151287f15d4";
const CODE="!";
export default function Puma(){return <ChallengePage title={TITLE} name={NAME} number={NUMBER} hash={HASH} code={CODE} nextRoute="/congrats" />;}
