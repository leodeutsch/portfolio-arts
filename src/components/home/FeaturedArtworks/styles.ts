import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../../styles/breakpoints";

export const FeaturedSection = styled.section`
  padding: 4rem 0;
  background-color: #f8f8f8;
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ArtworksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const ArtworkCard = styled.div<{ $backgroundImage: string }>`
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all ${({ theme }) => theme.transitions.default};
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${({ $backgroundImage }) => $backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: transform ${({ theme }) => theme.transitions.slow};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 20%;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(0, 0, 0, 0.05) 5%,
      rgba(0, 0, 0, 0.2) 20%,
      rgba(0, 0, 0, 0.5) 60%,
      rgba(0, 0, 0, 0.6) 100%
    );
    backdrop-filter: blur(0.5px);
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.large};

    &::before {
      transform: scale(1.1);
    }

    &::after {
      backdrop-filter: blur(0.5px);
    }
  }
`;

export const ArtworkInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 1.5rem 1rem;
  color: white;
  z-index: 3;
  text-align: left;

  ${media.tablet} {
    padding: 1.5rem 1rem 0.8rem;
  }

  ${media.mobile} {
    padding: 1rem 0.8rem 0.6rem;
  }
`;

export const ArtworkTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);

  ${media.tablet} {
    font-size: 1rem;
  }

  ${media.mobile} {
    font-size: 0.9rem;
  }
`;

export const ViewAllButton = styled(Link)`
  display: inline-block;
  margin: 0 auto;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 8px;
  transition: all ${({ theme }) => theme.transitions.default};
  text-align: center;
  width: 100%;
  max-width: 300px;
  display: block;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.large};
    transform: translateY(-1px);
  }
`;
