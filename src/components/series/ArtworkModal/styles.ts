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

export const ModalContent = styled.div<{
  $orientation: "portrait" | "landscape";
}>`
  position: relative;
  width: auto;
  max-width: min(
    100vw,
    ${({ $orientation }) => ($orientation === "portrait" ? "600px" : "1000px")}
  );
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
  z-index: 1;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: rotate(90deg);
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }

  ${media.tablet} {
    width: 40px;
    height: 40px;
  }
`;

const ChevronButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 1;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: scale(1.4);
  }
`;

export const PrevButton = styled(ChevronButton)`
  left: 1rem;
`;

export const NextButton = styled(ChevronButton)`
  right: 1rem;
`;

export const ImageContainer = styled.div`
  /* flex: 1; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  overflow: hidden;
  position: relative;

  img {
    width: auto;
    height: auto;
    max-width: 90vw;
    max-height: 80vh;
    object-fit: contain;
  }
`;

export const LoadingMessage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textLight};
  background-color: #f5f5f5;
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
