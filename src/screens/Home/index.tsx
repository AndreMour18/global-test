import React, { useState } from "react";

import SearchBar from "~/components/SearchBar";
import WordResult from "~/components/WordResult";
import ThemeToggle from "~/components/ThemeToggle";

import { Container, ErrorMsg, Header } from "./styles";

interface Props {
  toggleTheme: () => void;
  setFontFamily: (font: string) => void;
}

const Home: React.FC<Props> = ({ toggleTheme }) => {
  const [word, setWord] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!word.trim()) {
      setError("Digite uma palavra antes de buscar.");
      setResult(null);
      return;
    }

    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await res.json();
      if (Array.isArray(data)) {
        setResult(data[0]);
        setError("");
      } else {
        setError("Palavra não encontrada.");
        setResult(null);
      }
    } catch {
      setError("Erro ao buscar palavra.");
    }
  };

  return (
    <Container>
      <Header>
        <ThemeToggle onToggle={toggleTheme} />
      </Header>
      <SearchBar value={word} onChange={setWord} onSearch={handleSearch} />
      {error && <ErrorMsg>{error}</ErrorMsg>}
      {result && <WordResult data={result} />}
    </Container>
  );
};

export default Home;
