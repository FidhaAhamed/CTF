import ChallengePage from "../components/ChallengePage";

const NAME = "athena",
  NUMBER = 4,
  TITLE = "Athena";
const HASH =
  "f0483107f8792b3ecb4a07279debf58aa2c271d26f629c6495dc5f046b0555a0";
const CODE = "%";

export default function Athena() {
  return (
    <>
      <style>{`
        
        :root {
          --start: "1111010";  
          --theme-dark: #656565; / 1100101 */
        }

        .athena-secret {
          border: 1px solid #727272; /* 1110010 */
          box-shadow: 0 0 0 1px #6f6f6f; /* 1101111 */
        }

        @media (max-width: 600px) {
          body { background: #707070; } /* 1110000 */
        }

        .unused-class {
          outline: #6f6f6f; /* 1101111 */
          caret-color: #696969; /* 1101001 */
        }

        /* sprinkle more */
        #clue-container {
          accent-color: #6e6e6e; /* 1101110 */
        }

        button:hover {
          border-color: #747474; /* 1110100 */
        }

        footer {
          scrollbar-color: #636363 #fff; /* 1100011 */
        }

        header {
          text-decoration-color: #6f6f6f; /* 1101111 */
        }

        nav {
          text-emphasis-color: #727272; /* 1110010 */
        }

        aside {
          color-scheme: light dark; /* filler */
          --last: "1100101";
        }
      `}</style>

      <ChallengePage
        title={TITLE}
        name={NAME}
        number={NUMBER}
        hash={HASH}
        code={CODE}
        nextRoute="/challenge/Poseidon"
      />
    </>
  );
}