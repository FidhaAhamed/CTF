import ChallengePage from "../components/ChallengePage";
const NAME="hermes", NUMBER=7, TITLE="Hermes";
const HASH="48398245bb0dcfead2309ac3272f399c26fd8964b8919e049001ffc78159bc28";
const CODE="&";
export default function Hermes(){return <ChallengePage title={TITLE} name={NAME} number={NUMBER} hash={HASH} code={CODE} nextRoute="/challenge/Calypso" />;}
