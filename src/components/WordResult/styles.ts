import styled from "styled-components";

export const ResultContainer = styled.div`
  margin-top: 2rem;
`;

export const WordHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const WordInfo = styled.div`
  flex: 1;
`;

export const WordTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin: 0;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Phonetic = styled.span`
  color: #a445ed;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  display: block;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const MeaningSection = styled.section`
  margin: 2rem 0;
`;

export const PartOfSpeech = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const PartOfSpeechText = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  font-style: italic;
  color: ${({ theme }) => theme.text};
  margin: 0;
  margin-right: 1rem;
`;

export const Divider = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${({ theme }) => theme.divider};
`;

export const MeaningTitle = styled.h3`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.25rem;
  font-weight: 400;
`;

export const DefinitionList = styled.ul`
  margin: 1rem 0;
  padding-left: 1.5rem;
`;

export const DefinitionItem = styled.li`
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.5;

  &::marker {
    color: #a445ed;
  }
`;

export const Example = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-style: italic;
`;

export const Synonyms = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SynonymTag = styled.span`
  color: #a445ed;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const NoResults = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.125rem;
  margin-top: 3rem;
`;
