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

export const PortfolioSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 0.5fr));
  gap: 1.5rem;
`;

export const PortfolioButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 50px;
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.small};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;
