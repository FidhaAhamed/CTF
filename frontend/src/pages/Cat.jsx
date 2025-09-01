import ChallengePage from "../components/ChallengePage";
const NAME="cat", NUMBER=2, TITLE="Cat";
const HASH="fbc29085f4f711a92870e7fd78077e032321240174d9e37020d512cbd5d5eaea";
const CODE="g";
export default function Cat(){return <ChallengePage title={TITLE} name={NAME} number={NUMBER} hash={HASH} code={CODE} nextRoute="/challenge/fox" />;}
