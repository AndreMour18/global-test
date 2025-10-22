import styled from "styled-components";

interface SearchContainerProps {
  theme: "light" | "dark";
  hasError: boolean;
}

export const SearchContainer = styled.div<SearchContainerProps>`
  position: relative;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input<{
  theme: "light" | "dark";
  hasError: boolean;
}>`
  width: 90%;
  padding: 0.875rem 1.5rem;
  padding-right: 3rem;
  border-radius: 16px;
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? "#FF5252" : theme === "light" ? "#E9E9E9" : "#1F1F1F"};
  background-color: ${({ theme }) =>
    theme === "light" ? "#F4F4F4" : "#1F1F1F"};
  color: ${({ theme }) => (theme === "light" ? "#2D2D2D" : "#FFFFFF")};
  font-size: 1.25rem;
  font-weight: 700;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ hasError }) => (hasError ? "#FF5252" : "#A445ED")};
  }

  &::placeholder {
    color: ${({ theme }) => (theme === "light" ? "#2D2D2D" : "#FFFFFF")};
    opacity: 0.25;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #a445ed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
