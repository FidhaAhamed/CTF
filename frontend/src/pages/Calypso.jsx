import ChallengePage from "../components/ChallengePage";
const NAME="calypso", NUMBER=8, TITLE="Calypso";
const HASH="0d1af12ee692bc4bac27e99603f21771dd617d9b3d5f4748e89abf1d46243dfb";
const CODE="Q";
export default function Calypso(){return <ChallengePage title={TITLE} name={NAME} number={NUMBER} hash={HASH} code={CODE} nextRoute="/challenge/Circe" />;}
