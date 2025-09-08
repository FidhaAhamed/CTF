import ChallengePage from "../components/ChallengePage";
const NAME="telemachus", NUMBER=3, TITLE="Telemachus";
const HASH="826457e1f6810cda018196cd7631b6a5e7a03644a91fbc599c7613ab9008f603";
const CODE="@";
export default function Telemachus(){return <ChallengePage title={TITLE} name={NAME} number={NUMBER} hash={HASH} code={CODE} nextRoute="/challenge/Athena" />;}
