import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 8rem;
  padding: 0 1rem;
`;

export const Emoji = styled.span`
  font-size: 4rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  line-height: 24px;
  max-width: 736px;
`;
