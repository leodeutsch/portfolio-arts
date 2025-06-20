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

export const ArtworkCard = styled(Link)`
  display: block;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const ArtworkImage = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.slow};
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const ArtworkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.default};

  ${ArtworkCard}:hover & {
    opacity: 1;
  }
`;

export const ViewButton = styled.span`
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.75rem 1.5rem;
  border: 2px solid white;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: white;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ArtworkInfo = styled.div`
  padding: 1.5rem;
`;

export const ArtworkTitle = styled.h3`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.secondary};
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
  border-radius: 4px;
  transition: all ${({ theme }) => theme.transitions.default};
  text-align: center;
  width: 100%;
  max-width: 300px;
  display: block;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;
