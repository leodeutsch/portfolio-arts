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
  padding: 3rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 3rem;
`;

export const ContactTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ContactButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  ${media.mobile} {
    gap: 1rem;
  }
`;

export const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border-radius: 4px;
  font-weight: 500;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }

  ${media.mobile} {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

export const EmailIcon = styled.span`
  font-size: 1.2rem;
`;

export const InstagramIcon = styled.span`
  font-size: 1.2rem;
`;

export const WhatsAppIcon = styled.span`
  font-size: 1.2rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textLight};
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

// Ícones simplificados - você pode substituir por uma biblioteca de ícones
export const TwitterIcon = styled.span`
  &::before {
    content: "𝕏";
    font-size: 1.2rem;
  }
`;

export const InstagramIconSocial = styled.span`
  &::before {
    content: "📷";
    font-size: 1.2rem;
  }
`;

export const FacebookIcon = styled.span`
  &::before {
    content: "f";
    font-family: Arial, sans-serif;
    font-weight: bold;
    font-size: 1.3rem;
  }
`;

export const Copyright = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
`;
