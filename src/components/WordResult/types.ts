export interface Phonetic {
  text?: string;
  audio?: string;
}

export interface Definition {
  definition: string;
  example?: string;
  synonyms?: string[];
  antonyms?: string[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export interface WordData {
  word: string;
  phonetic?: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  sourceUrls?: string[];
}

export interface WordResultProps {
  data: WordData;
  theme: "light" | "dark";
}

export interface PlayButtonProps {
  audioUrl?: string;
  theme: "light" | "dark";
}

export interface SourceLinkProps {
  url: string;
  theme: "light" | "dark";
}
