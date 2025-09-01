import ChallengePage from "../components/ChallengePage";
const NAME="bear", NUMBER=6, TITLE="Bear";
const HASH="9a50821756e14977f2dbb2ac2e5ed789ce4d6c4f8a29c538c136b408c3196280";
const CODE="k";
export default function Bear(){return <ChallengePage title={TITLE} name={NAME} number={NUMBER} hash={HASH} code={CODE} nextRoute="/challenge/lynx" />;}
