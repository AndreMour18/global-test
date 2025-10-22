import React, { useState, useCallback } from "react";
import { useFormik } from "formik";

import { SearchBar, WordResult, ThemeToggle, FontSelector } from "~/components";
import { Book } from "~/assets/svgs";

import { Container, ErrorMsg, Header, LoadingText, Divider } from "./styles";
import { validationSchema } from "./validationSchema";

interface Props {
  toggleTheme: () => void;
  setFontFamily: (font: string) => void;
  currentFont: string;
  currentTheme: "light" | "dark";
}

const Home: React.FC<Props> = ({
  toggleTheme,
  setFontFamily,
  currentFont,
  currentTheme,
}) => {
  const [result, setResult] = useState<any>(null);
  const [apiError, setApiError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { touched, errors, setFieldValue, handleSubmit, values } = useFormik({
    initialValues: {
      word: "",
    },
    onSubmit: useCallback(async ({ word }: { word: string }) => {
      if (!word.trim()) return;

      setIsLoading(true);
      setApiError("");
      setResult(null);

      try {
        const res = await fetch(
          `/api/v2/entries/en/${encodeURIComponent(word)}`
        );

        if (!res.ok) {
          throw new Error("Word not found");
        }

        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setResult(data[0]);
          setApiError("");
        } else {
          setApiError("Palavra não encontrada.");
          setResult(null);
        }
      } catch (error) {
        setApiError("Erro ao buscar palavra.");
        setResult(null);
      } finally {
        setIsLoading(false);
      }
    }, []),
    validationSchema,
  });

  const handleSearchBarChange = useCallback(
    (value: string) => {
      setFieldValue("word", value);
      if (apiError) {
        setApiError("");
      }
    },
    [setFieldValue, apiError]
  );

  const handleSearchBarSearch = useCallback(() => {
    handleSubmit();
  }, [handleSubmit]);

  return (
    <Container fontFamily={currentFont}>
      <Header>
        <Book />
        <div className="controls">
          <FontSelector
            onChange={setFontFamily}
            currentFont={currentFont}
            theme={currentTheme}
          />
          <Divider />
          <ThemeToggle onToggle={toggleTheme} currentTheme={currentTheme} />
        </div>
      </Header>

      <SearchBar
        value={values.word}
        onChange={handleSearchBarChange}
        onSearch={handleSearchBarSearch}
        disabled={isLoading}
        theme={currentTheme}
        hasError={!!(touched.word && errors.word) || !!apiError}
      />

      {touched.word && errors.word && <ErrorMsg>{errors.word}</ErrorMsg>}
      {apiError && <ErrorMsg>{apiError}</ErrorMsg>}
      {isLoading && <LoadingText>Loading...</LoadingText>}
      {result && <WordResult data={result} theme={currentTheme} />}
    </Container>
  );
};

export default Home;
