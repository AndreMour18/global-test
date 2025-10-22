import React from "react";

import { WordResultProps } from "./types";
import {
  ResultContainer,
  WordHeader,
  WordInfo,
  WordTitle,
  Phonetic,
  MeaningSection,
  PartOfSpeech,
  PartOfSpeechText,
  Divider,
  MeaningTitle,
  DefinitionList,
  DefinitionItem,
  Example,
  Synonyms,
  SynonymTag,
  NoResults,
} from "./styles";
import { PlayButton, SourceLinks } from "./components";

const WordResult: React.FC<WordResultProps> = ({ data, theme }) => {
  if (!data) {
    return <NoResults>No results found</NoResults>;
  }

  const audioPhonetic = data.phonetics?.find((phonetic) => phonetic.audio);
  const audioUrl = audioPhonetic?.audio;

  return (
    <ResultContainer>
      <WordHeader>
        <WordInfo>
          <WordTitle>{data.word}</WordTitle>
          {data.phonetic && <Phonetic>{data.phonetic}</Phonetic>}
        </WordInfo>
        <PlayButton audioUrl={audioUrl} theme={theme} />
      </WordHeader>

      {data.meanings?.map((meaning, index) => (
        <MeaningSection key={index}>
          <PartOfSpeech>
            <PartOfSpeechText>{meaning.partOfSpeech}</PartOfSpeechText>
            <Divider />
          </PartOfSpeech>

          <MeaningTitle>Meaning</MeaningTitle>

          <DefinitionList>
            {meaning.definitions?.slice(0, 3).map((definition, defIndex) => (
              <DefinitionItem key={defIndex}>
                {definition.definition}
                {definition.example && (
                  <Example>"{definition.example}"</Example>
                )}
              </DefinitionItem>
            ))}
          </DefinitionList>

          {meaning.synonyms && meaning.synonyms.length > 0 && (
            <Synonyms>
              <MeaningTitle style={{ marginBottom: 0, marginRight: "1rem" }}>
                Synonyms
              </MeaningTitle>
              {meaning.synonyms.slice(0, 5).map((synonym, synonymIndex) => (
                <SynonymTag key={synonymIndex}>{synonym}</SynonymTag>
              ))}
            </Synonyms>
          )}
        </MeaningSection>
      ))}

      {data.sourceUrls && data.sourceUrls.length > 0 && (
        <SourceLinks urls={data.sourceUrls} theme={theme} />
      )}
    </ResultContainer>
  );
};

export default WordResult;
