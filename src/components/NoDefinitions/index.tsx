import React from "react";

import { Container, Description, Emoji, Title } from "./styles";

interface NoDefinitionsProps {
  searchedWord?: string;
}

const NoDefinitions: React.FC<NoDefinitionsProps> = () => {
  return (
    <Container>
      <Emoji>😕</Emoji>
      <Title>No Definitions Found</Title>
      <Description>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </Description>
    </Container>
  );
};

export default NoDefinitions;
