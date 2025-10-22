import styled from "styled-components";

export const SourceContainer = styled.div<{ theme: "light" | "dark" }>`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid
    ${({ theme }) => (theme === "light" ? "#E9E9E9" : "#3A3A3A")};
`;

export const SourceText = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.875rem;
  margin-right: 1rem;
`;

export const SourceLink = styled.a<{ theme: "light" | "dark" }>`
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  text-decoration: underline;

  &:hover {
    color: #a445ed;
  }
`;
