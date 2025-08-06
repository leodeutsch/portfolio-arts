import React, { useRef } from "react";
import { Copyright } from "../../components/copyright";
import { useLanguage } from "../../hooks/useLanguage";
import ProfilePhoto from "../../images/profile.jpg";
import * as S from "./styles";

export const About: React.FC = () => {
  const { t } = useLanguage();
  const contactButtonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const button = contactButtonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty("--mouse-x", `${x}px`);
    button.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const button = contactButtonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty("--mouse-x", `${x}px`);
    button.style.setProperty("--mouse-y", `${y}px`);
  };

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
            {"2018 - Tribunal de Justiça do Estado da Bahia – Salvador/Ba"}
            <br />
            {"2018 - Assembléia Legislativa do Estado da Bahia"}
            <br />
            {"2019 - Galeria Sérgio Amorim – Shopping Barra – Salvador/Ba"}
            <br />
            {
              "2020 - III CiênciArt - Galeria Sérgio Amorim – Shopping Barra – Salvador/Ba"
            }
            <br />
            {
              "2020 - Arte e Ancestralidade – Atelier Sérgio Amorim – Salvador/Ba"
            }
            <br />
            {"2020/2022 – Galeria B. Arte - Shopping Paralela – Salvador -BA"}
            <br />
            {"2025 - Tribunal de Justiça do Estado da Bahia -Salvador"}
          </S.SectionContent>
        </S.Section>
      </S.ContentSection>

      <S.ContentSection>
        <S.Section>
          <S.SectionTitle>{t("about.awards")}</S.SectionTitle>
          <S.SectionContent>
            {
              "2010 - ART GALLERY BRAZIL - Publicação em pintura no livro: FLORES, NATUREZA MORTA E PAISAGENS BRASILEIRAS"
            }
            <br />
            {
              "2013 - CAPA da Revista CADERNOS PAGU - UNICAMP. (40), janeiro – junho 2013"
            }
          </S.SectionContent>
        </S.Section>
      </S.ContentSection>

      <S.ContentSection>
        <S.Section>
          <S.SectionTitle>{t("about.portfolio")}</S.SectionTitle>
          <S.PortfolioGrid>
            <S.PortfolioButton
              href="https://drive.google.com/file/d/1xatOXgFIxuaDbna10C9vMLHfZKLEE3Wd/preview"
              target="_blank"
              rel="noopener noreferrer"
              $backgroundImage={`https://ik.imagekit.io/${
                import.meta.env.VITE_IMGKIT_KEY
              }/saveiros/velas-ao-vento.jpg?tr=w-600,h-400,c-fill`}
            >
              <S.PortfolioButtonContent>
                {t("about.viewSloopsPortfolio")}
              </S.PortfolioButtonContent>
            </S.PortfolioButton>
            <S.PortfolioButton
              href="https://drive.google.com/file/d/190M0KqTZtT_CcgUwWeJ6cGRs2cchb1qB/preview"
              target="_blank"
              rel="noopener noreferrer"
              $backgroundImage={`https://ik.imagekit.io/${
                import.meta.env.VITE_IMGKIT_KEY
              }/negras/cabeca-feita-I.jpg?tr=w-600,h-400,c-fill`}
            >
              <S.PortfolioButtonContent>
                {t("about.viewBlackWomenPortfolio")}
              </S.PortfolioButtonContent>
            </S.PortfolioButton>
          </S.PortfolioGrid>
        </S.Section>
      </S.ContentSection>

      <S.ContactSection>
        <S.ContactTitle
          ref={contactButtonRef}
          to="/contact"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {t("about.getInTouch")}
        </S.ContactTitle>
      </S.ContactSection>

      <Copyright />
    </S.AboutContainer>
  );
};
