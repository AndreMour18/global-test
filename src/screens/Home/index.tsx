import React, { useState } from "react";
import { useFormik } from "formik";

import SearchBar from "~/components/SearchBar";
import WordResult from "~/components/WordResult";
import ThemeToggle from "~/components/ThemeToggle";
import FontSelector from "~/components/FontSelector";

import { Container, ErrorMsg, Header, LoadingText } from "./styles";
import { validationSchema } from "./validationSchema";

interface Props {
  toggleTheme: () => void;
  setFontFamily: (font: string) => void;
}

const Home: React.FC<Props> = ({ toggleTheme, setFontFamily }) => {
  const [result, setResult] = useState<any>(null);
  const [apiError, setApiError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { touched, errors, setFieldValue, handleSubmit, values } = useFormik({
    initialValues: {
      word: "",
    },
    onSubmit: async ({ word }) => {
      await handleSearch(word);
    },
    validationSchema,
  });

  const handleSearch = async (searchWord: string) => {
    if (!searchWord.trim()) return;

    setIsLoading(true);
    setApiError("");
    setResult(null);

    try {
      const res = await fetch(
        `/api/v2/entries/en/${encodeURIComponent(searchWord)}`
      );
      const data = await res.json();

      if (Array.isArray(data)) {
        setResult(data[0]);
        setApiError("");
      } else {
        setApiError("Palavra não encontrada.");
        setResult(null);
      }
    } catch {
      setApiError("Erro ao buscar palavra.");
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchBarChange = (value: string) => {
    setFieldValue("word", value);

    if (apiError) {
      setApiError("");
    }
  };

  const handleSearchBarSearch = () => {
    handleSubmit();
  };

  return (
    <Container>
      <Header>
        <FontSelector onChange={setFontFamily} />
        <ThemeToggle onToggle={toggleTheme} />
      </Header>

      <SearchBar
        value={values.word}
        onChange={handleSearchBarChange}
        onSearch={handleSearchBarSearch}
        disabled={isLoading}
      />

      {touched.word && errors.word && <ErrorMsg>{errors.word}</ErrorMsg>}
      {apiError && <ErrorMsg>{apiError}</ErrorMsg>}
      {isLoading && <LoadingText>Buscando...</LoadingText>}
      {result && <WordResult data={result} />}
    </Container>
  );
};

export default Home;
