import styled from "styled-components";
import { media } from "../../../styles/breakpoints";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;

  ${media.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }

  ${media.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
`;

export const ArtworkItem = styled.div`
  cursor: pointer;
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
  background-color: #f5f5f5;
`;

export const ArtworkImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.slow};
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const ArtworkOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  padding: 2rem 1rem 1rem;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.default};

  ${ArtworkItem}:hover & {
    opacity: 1;
  }
`;

export const ArtworkTitle = styled.h4`
  color: white;
  font-size: 1rem;
  font-weight: 600;
`;
