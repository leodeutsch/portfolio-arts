import styled from "styled-components";
import { media } from "../../styles/breakpoints";

export const Container = styled.main`
  min-height: 100vh;
  padding: calc(${({ theme }) => theme.sizes.headerHeight} + 2rem) 2rem 3rem;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const NotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const Header = styled.header`
  margin-bottom: 3rem;
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  transition: all ${({ theme }) => theme.transitions.default};
  margin-bottom: 2rem;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateX(-4px);
  }
`;

export const SerieInfo = styled.div`
  text-align: center;
`;

export const SerieTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.secondary};

  ${media.tablet} {
    font-size: 2rem;
  }
`;

export const SerieDescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 600px;
  margin: 0 auto 1rem;
  line-height: 1.6;
`;

export const ArtworkCount = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ErrorContainer = styled.div`
  color: red;
  padding: 16px;
  text-align: center;
`;
