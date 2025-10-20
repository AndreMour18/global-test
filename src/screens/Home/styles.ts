import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ErrorMsg = styled.p`
  color: red;
  margin-top: 10px;
`;

export const LoadingText = styled.p`
  color: #666;
  text-align: center;
  margin: 1rem 0;
  font-size: 0.9rem;
  font-style: italic;
`;
