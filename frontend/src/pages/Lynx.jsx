import ChallengePage from "../components/ChallengePage";
const NAME="lynx", NUMBER=7, TITLE="Lynx";
const HASH="7243ce62cffb76951bfa8b04c87823d289df07359a18a77b717d98850942c6ff";
const CODE="&";
export default function Lynx(){return <ChallengePage title={TITLE} name={NAME} number={NUMBER} hash={HASH} code={CODE} nextRoute="/challenge/seal" />;}
