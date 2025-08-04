import styled, { css, keyframes } from "styled-components";
import { media } from "../../../styles/breakpoints";

export const SliderContainer = styled.section<{ $theaterMode?: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ $theaterMode }) => ($theaterMode ? "100vh" : "82vh")};
  min-height: 400px;
  overflow: hidden;
  margin-top: ${({ theme, $theaterMode }) =>
    $theaterMode ? "0" : theme.sizes.headerHeight};

  ${media.tablet} {
    height: ${({ $theaterMode }) => ($theaterMode ? "100vh" : "50vh")};
    min-height: 300px;
  }
`;

export const SliderWrapper = styled.div<{
  $theaterMode?: boolean;
  $scrollProgress?: number;
}>`
  position: relative;
  width: 100%;
  height: 100%;
  transform: ${({ $theaterMode, $scrollProgress = 0 }) =>
    $theaterMode ? `scale(${1.2 - 0.2 * $scrollProgress})` : "scale(1)"};
  transition: ${({ $theaterMode }) =>
    $theaterMode ? "none" : "transform 0.3s ease"};
`;

export const Slide = styled.div<{
  active: boolean;
  $theaterMode?: boolean;
  $scrollProgress?: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitions.slow};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
  }
`;

export const SliderContent = styled.div<{ $scrollProgress?: number }>`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  z-index: 2;
  opacity: ${({ $scrollProgress = 1 }) => $scrollProgress};
  transition: opacity 0.3s ease;

  ${media.tablet} {
    bottom: 2rem;
  }
`;

export const SerieTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
`;

export const SerieName = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;

  ${media.tablet} {
    font-size: 2rem;
  }
`;

export const Indicators = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.75rem;
  z-index: 3;
`;

const loadingAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

export const Indicator = styled.button<{
  active: boolean;
  $animationKey?: number;
}>`
  position: relative;
  width: ${({ active }) => (active ? "32px" : "8px")};
  height: 8px;
  border-radius: 4px;
  background-color: ${({ active }) =>
    active ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.7)"};
  transition: all ${({ theme }) => theme.transitions.default};
  overflow: hidden;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0%;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 4px;
        animation: ${loadingAnimation} 5s linear;
      }
    `}

  &:hover {
    background-color: ${({ active }) =>
      active ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.7)"};
    transform: scale(1.1);
  }

  ${media.tablet} {
    width: ${({ active }) => (active ? "28px" : "6px")};
    height: 6px;
    border-radius: 3px;

    ${({ active }) =>
      active &&
      css`
        &::after {
          border-radius: 3px;
        }
      `}
  }
`;

export const ArrowButton = styled.button<{
  $left?: boolean;
  $right?: boolean;
  $hovered?: boolean;
}>`
  opacity: ${({ $hovered }) => ($hovered ? 1 : 0)};
  pointer-events: ${({ $hovered }) => ($hovered ? "auto" : "none")};
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  ${({ $left }) => $left && "left: 2rem;"}
  ${({ $right }) => $right && "right: 2rem;"}
  cursor: pointer;
  z-index: 4;
  transition: all ${({ theme }) => theme.transitions.default};

  ${media.tablet} {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    ${({ $left }) => $left && "left: 1rem;"}
    ${({ $right }) => $right && "right: 1rem;"}
  }

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.4);
  }
`;
