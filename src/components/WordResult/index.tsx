import React from "react";

import { Audio, Wrapper } from "./styles";

interface Props {
  data: any;
}

const WordResult: React.FC<Props> = ({ data }) => {
  const phonetic =
    data.phonetics?.find((p: any) => p.audio) || data.phonetics?.[0];

  return (
    <Wrapper>
      <h2>{data.word}</h2>
      {phonetic?.text && <p>{phonetic.text}</p>}
      {phonetic?.audio && (
        <Audio controls>
          <source src={phonetic.audio} type="audio/mp3" />
        </Audio>
      )}
      {data.meanings.map((m: any, i: number) => (
        <div key={i}>
          <h3>{m.partOfSpeech}</h3>
          <ul>
            {m.definitions.map((d: any, j: number) => (
              <li key={j}>{d.definition}</li>
            ))}
          </ul>
        </div>
      ))}
      {data.sourceUrls && (
        <a href={data.sourceUrls[0]} target="_blank" rel="noopener noreferrer">
          Fonte
        </a>
      )}
    </Wrapper>
  );
};

export default WordResult;
