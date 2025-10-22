import styled from "styled-components";

export const SourceContainer = styled.div<{ theme: "light" | "dark" }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid
    ${({ theme }) => (theme === "light" ? "#E9E9E9" : "#3A3A3A")};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const SourceText = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.875rem;
  text-decoration: underline;
`;

export const SourceLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  text-decoration: underline;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
