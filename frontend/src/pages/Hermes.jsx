import ChallengePage from "../components/ChallengePage";
const NAME="hermes", NUMBER=7, TITLE="Hermes";
const HASH="7243ce62cffb76951bfa8b04c87823d289df07359a18a77b717d98850942c6ff";
const CODE="&";
export default function Hermes(){return <ChallengePage title={TITLE} name={NAME} number={NUMBER} hash={HASH} code={CODE} nextRoute="/challenge/Calypso" />;}
