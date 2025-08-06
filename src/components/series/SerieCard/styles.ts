import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../../styles/breakpoints";

export const CardLink = styled(Link)`
  text-decoration: none;
  display: block;
`;

export const Card = styled.div<{ $backgroundImage: string }>`
  position: relative;
  display: block;
  height: 500px;
  border-radius: 16px;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.medium};
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
    backdrop-filter: blur(1px);
  }

  &:hover {
    &::before {
      transform: scale(1.1);
    }

    &::after {
      backdrop-filter: blur(1px);
    }
  }

  ${media.tablet} {
    height: 250px;
  }

  ${media.mobile} {
    height: 220px;
  }
`;

export const SerieInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  padding: 2rem 1.5rem 1rem;
  color: white;
  z-index: 2;
  text-align: left;
  transition: opacity ${({ theme }) => theme.transitions.default};

  ${media.tablet} {
    padding: 1.5rem 1rem 0.8rem;
  }

  ${media.mobile} {
    padding: 1rem 0.8rem 0.6rem;
  }
`;

export const SerieName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  ${media.tablet} {
    font-size: 1.1rem;
  }

  ${media.mobile} {
    font-size: 1rem;
  }
`;
