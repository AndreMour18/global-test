import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;
