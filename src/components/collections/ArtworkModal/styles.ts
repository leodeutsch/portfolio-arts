import styled from "styled-components";
import { media } from "../../../styles/breakpoints";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 1000px;
  width: 100%;
  max-height: 90vh;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    max-height: 85vh;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  font-size: 2rem;
  font-weight: 300;
  z-index: 1;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: white;
    transform: rotate(90deg);
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const ArtworkInfo = styled.div`
  padding: 2rem;
  background-color: white;
  text-align: center;

  ${media.tablet} {
    padding: 1.5rem;
  }
`;

export const ArtworkTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.secondary};

  ${media.tablet} {
    font-size: 1.5rem;
  }
`;

export const ArtworkDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const ArtworkYear = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
`;
