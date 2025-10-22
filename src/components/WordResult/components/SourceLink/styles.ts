import styled from "styled-components";

export const SourceContainer = styled.div<{ theme: "light" | "dark" }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid
    ${({ theme }) => (theme === "light" ? "#E9E9E9" : "#3A3A3A")};
`;

export const SourceText = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.875rem;
  text-decoration: underline;
`;

export const SourceLink = styled.a<{ theme: "light" | "dark" }>`
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  text-decoration: underline;
`;
