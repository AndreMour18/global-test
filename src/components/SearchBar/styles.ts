import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.text};
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.accent};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;
