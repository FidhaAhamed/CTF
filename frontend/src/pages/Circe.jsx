// src/pages/Circe.jsx
import ChallengePage from "../components/ChallengeUIWrapper";

const NAME = "circe";
const NUMBER = 9;
const TITLE = "Circe";
const HASH = "6144545e67abcfeb8ce053127fc5189ea9f094454ec54ec9dd7bf1774d74d62d";
const CODE = "*";
const AUDIO_URL = "/audio/circe.wav"; // Make sure file is in public/audio

export default function Circe() {
  return (
    <ChallengePage
      title={TITLE}
      name={NAME}
      number={NUMBER}
      hash={HASH}
      code={CODE}
      audioUrl={AUDIO_URL}
      nextRoute="/congrats"
      hiddenElements={
        <>
          {/* Hidden audio & download */}
          <audio src={AUDIO_URL} preload="auto" style={{ display: "none" }} />
          <div style={{ display: "none" }}>
            <a href={AUDIO_URL} download>
              circe.wav
            </a>
          </div>
        </>
      }
    />
  );
}
