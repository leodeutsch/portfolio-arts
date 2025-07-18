import styled from "styled-components";
import { media } from "../../../styles/breakpoints";

export const SliderContainer = styled.section`
  position: relative;
  width: 100%;
  height: 82vh;
  min-height: 400px;
  overflow: hidden;
  margin-top: ${({ theme }) => theme.sizes.headerHeight};

  ${media.tablet} {
    height: 50vh;
    min-height: 300px;
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Slide = styled.div<{ active: boolean }>`
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

export const SliderContent = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  z-index: 2;

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
  gap: 0.5rem;
  z-index: 3;
`;

export const Indicator = styled.button<{ active: boolean }>`
  width: ${({ active }) => (active ? "24px" : "8px")};
  height: 8px;
  border-radius: 4px;
  background-color: ${({ active }) =>
    active ? "#fff" : "rgba(255, 255, 255, 0.5)"};
  transition: all ${({ theme }) => theme.transitions.default};
`;

export const ArrowButton = styled.button<{
  left?: boolean;
  right?: boolean;
  hovered?: boolean;
}>`
  opacity: ${({ hovered }) => (hovered ? 1 : 0)};
  pointer-events: ${({ hovered }) => (hovered ? "auto" : "none")};
  position: absolute;
  top: 50%;
  ${({ left }) => left && "left: 2rem;"}
  ${({ right }) => right && "right: 2rem;"}
  cursor: pointer;
  z-index: 4;
  transition: all ${({ theme }) => theme.transitions.default};

  ${media.tablet} {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    ${({ left }) => left && "left: 1rem;"}
    ${({ right }) => right && "right: 1rem;"}
  }

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.2);
  }
`;
