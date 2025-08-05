import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../styles/breakpoints";

export const AboutContainer = styled.main`
  min-height: 100vh;
  padding: calc(${({ theme }) => theme.sizes.headerHeight} + 3rem) 2rem 3rem;
  max-width: 900px;
  margin: 0 auto;
`;

export const ProfileSection = styled.section`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 4rem;

  ${media.tablet} {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #f5d4c1;

  ${media.tablet} {
    width: 150px;
    height: 150px;
  }
`;

export const ProfileInfo = styled.div``;

export const ArtistName = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.secondary};

  ${media.tablet} {
    font-size: 2rem;
  }
`;

export const ArtistTitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.25rem;
`;

export const ArtistLocation = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
`;

export const ContentSection = styled.div`
  margin-bottom: 4rem;
`;

export const Section = styled.section`
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.secondary};

  ${media.tablet} {
    font-size: 1.5rem;
  }
`;

export const SectionContent = styled.div`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;
  font-size: 1.05rem;
  white-space: pre-wrap;

  p {
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

export const ContactSection = styled.section`
  text-align: center;
  padding: 5rem 0 0 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 3rem;
`;

export const ContactTitle = styled(Link)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.secondary};
  padding: 0.8rem 1.2rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const PortfolioButton = styled.a<{ $backgroundImage: string }>`
  position: relative;
  display: block;
  height: 150px;
  border-radius: 16px;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  text-decoration: none;
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      transparent 0%,
      transparent 50%,
      rgba(0, 0, 0, 0.4) 80%,
      rgba(0, 0, 0, 0.5) 90%,
      rgba(0, 0, 0, 0.6) 100%
    );
    backdrop-filter: blur(0px);
    transition: backdrop-filter ${({ theme }) => theme.transitions.default};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 45%;
    background: linear-gradient(
      180deg,
      transparent 0%,
      transparent 10%,
      transparent 20%,
      transparent 30%,
      transparent 40%,
      transparent 50%,
      transparent 60%,
      transparent 70%,
      transparent 80%,
      transparent 90%,
      transparent 100%
    );
    backdrop-filter: blur(1px);
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.large};

    &::before {
      backdrop-filter: blur(1px);
    }

    &::after {
      backdrop-filter: blur(1px);
    }
  }

  ${media.tablet} {
    height: 200px;
  }

  ${media.mobile} {
    height: 180px;
  }
`;

export const PortfolioButtonContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 1.5rem;
  color: white;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
  z-index: 2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  ${media.tablet} {
    padding: 1.5rem 1rem;
    font-size: 1rem;
  }

  ${media.mobile} {
    padding: 1rem 0.8rem;
    font-size: 0.9rem;
  }
`;
