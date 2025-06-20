import styled from "styled-components";
import { media } from "../../styles/breakpoints";

export const CollectionsContainer = styled.main`
  min-height: 100vh;
  padding: calc(${({ theme }) => theme.sizes.headerHeight} + 3rem) 2rem 3rem;
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

export const Header = styled.header`
  text-align: center;
  margin-bottom: 4rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.secondary};

  ${media.tablet} {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;

  ${media.tablet} {
    font-size: 1rem;
  }
`;

export const CollectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;

  ${media.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`;
