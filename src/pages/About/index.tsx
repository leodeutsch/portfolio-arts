import React from "react";
import { Copyright } from "../../components/copyright";
import { useLanguage } from "../../hooks/useLanguage";
import ProfilePhoto from "../../images/profile.jpg";
import * as S from "./styles";

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <S.AboutContainer>
      <S.ProfileSection>
        <S.ProfileImage src={ProfilePhoto} alt="Artist photo" />
        <S.ProfileInfo>
          <S.ArtistName>Rosa Rocha</S.ArtistName>
          <S.ArtistTitle>{t("about.visualArtist")}</S.ArtistTitle>
          <S.ArtistLocation>
            {t("about.basedIn")} Salvador, Brasil
          </S.ArtistLocation>
        </S.ProfileInfo>
      </S.ProfileSection>

      <S.ContentSection>
        <S.Section>
          <S.SectionTitle>{t("about.artistJourney")}</S.SectionTitle>
          <S.SectionContent>{t("about.biographyText")}</S.SectionContent>
        </S.Section>

        <S.Section>
          <S.SectionTitle>{t("about.creativeProcess")}</S.SectionTitle>
          <S.SectionContent>
            {t("about.creativeProcessDescription")}
          </S.SectionContent>
        </S.Section>

        <S.Section>
          <S.SectionTitle>{t("about.exhibitions")}</S.SectionTitle>
          <S.SectionContent>
            2010 - ART GALLERY BRAZIL - Publicação em pintura no livro: FLORES, NATUREZA MORTA E PAISAGENS BRASILEIRAS
            2013 - CAPA da Revista CADERNOS PAGU - UNICAMP. (40), janeiro – junho 2013
            2018 - Tribunal de Justiça do Estado da Bahia – Salvador/Ba
            2018 - Assembléia Legislativa do Estado da Bahia
            2019 - Galeria Sérgio Amorim – Shopping Barra – Salvador/Ba
            2020 - III CiênciArt - Galeria Sérgio Amorim – Shopping Barra – Salvador/Ba
            2020 - Arte e Ancestralidade – Atelier Sérgio Amorim – Salvador/Ba
            2020/2022 – Galeria B. Arte - Shopping Paralela – Salvador -BA
            2025 - Tribunal de Justiça do Estado da Bahia -Salvador
          </S.SectionContent>
        </S.Section>
      </S.ContentSection>

      <S.ContactSection>
        <S.ContactTitle to="/contact">{t("about.getInTouch")}</S.ContactTitle>
      </S.ContactSection>

      <Copyright />
    </S.AboutContainer>
  );
};
