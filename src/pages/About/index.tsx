import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import * as S from "./styles";

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <S.AboutContainer>
      <S.ProfileSection>
        <S.ProfileImage src="/images/artist-photo.jpg" alt="Artist photo" />
        <S.ProfileInfo>
          <S.ArtistName>Sophia Carter</S.ArtistName>
          <S.ArtistTitle>{t("about.visualArtist")}</S.ArtistTitle>
          <S.ArtistLocation>
            {t("about.basedIn")} São Paulo, Brasil
          </S.ArtistLocation>
        </S.ProfileInfo>
      </S.ProfileSection>

      <S.ContentSection>
        <S.Section>
          <S.SectionTitle>{t("about.artistJourney")}</S.SectionTitle>
          <S.SectionContent>
            {/* Texto sobre a trajetória da artista será adicionado aqui */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </S.SectionContent>
        </S.Section>

        <S.Section>
          <S.SectionTitle>{t("about.creativeProcess")}</S.SectionTitle>
          <S.SectionContent>
            {/* Texto sobre o processo criativo será adicionado aqui */}
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </S.SectionContent>
        </S.Section>

        <S.Section>
          <S.SectionTitle>{t("about.exhibitions")}</S.SectionTitle>
          <S.SectionContent>
            {/* Lista de exposições e conquistas será adicionada aqui */}
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </S.SectionContent>
        </S.Section>
      </S.ContentSection>

      <S.ContactSection>
        <S.ContactTitle>{t("about.getInTouch")}</S.ContactTitle>
        <S.ContactButtons>
          <S.ContactButton href="mailto:contact@sophiacarter.com">
            <S.EmailIcon>✉</S.EmailIcon>
            {t("about.email")}
          </S.ContactButton>
          <S.ContactButton
            href="https://instagram.com/sophiacarter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.InstagramIcon>📷</S.InstagramIcon>
            Instagram
          </S.ContactButton>
          <S.ContactButton
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.WhatsAppIcon>💬</S.WhatsAppIcon>
            WhatsApp
          </S.ContactButton>
        </S.ContactButtons>
      </S.ContactSection>

      <S.SocialLinks>
        <S.SocialLink
          href="https://twitter.com/sophiacarter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.TwitterIcon />
        </S.SocialLink>
        <S.SocialLink
          href="https://instagram.com/sophiacarter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.InstagramIconSocial />
        </S.SocialLink>
        <S.SocialLink
          href="https://facebook.com/sophiacarter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.FacebookIcon />
        </S.SocialLink>
      </S.SocialLinks>

      <S.Copyright>
        ©2024 Sophia Carter. {t("about.allRightsReserved")}
      </S.Copyright>
    </S.AboutContainer>
  );
};
