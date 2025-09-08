import ChallengePage from "../components/ChallengePage";
const NAME="poseidon", NUMBER=5, TITLE="Poseidon";
const HASH="1e2c75f343da0f688fc45b6e5e11d8992406811172f9bc4af36f07bacbaccf56";
const CODE="Z";
export default function Poseidon(){return <ChallengePage title={TITLE} name={NAME} number={NUMBER} hash={HASH} code={CODE} nextRoute="/challenge/Zeus" />;}
