import styled from "styled-components";

interface ContainerProps {
  fontFamily: string;
}

export const Container = styled.div<ContainerProps>`
  min-height: 100vh;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
  font-family: ${({ fontFamily }) => fontFamily};
  max-width: 737px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  .controls {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 32px;
  background-color: ${({ theme }) => theme.divider};
`;

export const ErrorMsg = styled.span`
  color: #ff5252;
  font-size: 1.125rem;
`;

export const LoadingText = styled.p`
  font-size: 1.125rem;
  text-align: center;
  margin-top: 3rem;
  color: ${({ theme }) => theme.textSecondary};
`;
