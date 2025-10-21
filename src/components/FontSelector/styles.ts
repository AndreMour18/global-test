import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const SelectButton = styled.button<{
  theme: "light" | "dark";
  isOpen: boolean;
}>`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => (theme === "light" ? "#2D2D2D" : "#FFFFFF")};
  font-weight: 700;
  font-size: 1rem;
  gap: 26px;
  justify-content: space-between;

  &:hover {
    color: #a445ed;
  }

  svg {
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
    transition: transform 0.3s ease;
    color: #a445ed;
  }
`;

export const Dropdown = styled.ul<{ theme: "light" | "dark" }>`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: ${({ theme }) =>
    theme === "light" ? "#FFFFFF" : "#1F1F1F"};
  border-radius: 16px;
  box-shadow: ${({ theme }) =>
    theme === "dark"
      ? "0px 5px 30px 0px #a445ed"
      : " 0px 5px 30px 0px #0000001A"};
  list-style: none;
  padding: 1.5rem;
  width: 180px;
  z-index: 1000;

  li {
    margin-bottom: 1rem;
    cursor: pointer;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      color: #a445ed;
    }
  }
`;

export const FontOption = styled.li<{
  fontFamily: string;
  isSelected: boolean;
}>`
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: ${({ isSelected }) => (isSelected ? "700" : "400")};
  color: ${({ isSelected }) => (isSelected ? "#A445ED" : "inherit")};
`;
