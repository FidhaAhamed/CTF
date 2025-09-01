import ChallengePage from "../components/ChallengePage";
const NAME="raven", NUMBER=9, TITLE="Raven";
const HASH="e5a494a699f5c9f0a460db181a9af84a6c1fe41b2a145d2b8185db4799bda9cd";
const CODE="*";
export default function Raven(){return <ChallengePage title={TITLE} name={NAME} number={NUMBER} hash={HASH} code={CODE} nextRoute="/challenge/puma" />;}
