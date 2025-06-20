import styled from "styled-components";

export const HomeContainer = styled.main`
  min-height: 100vh;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textLight};
`;
