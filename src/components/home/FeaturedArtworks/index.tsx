import React from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import type { Artwork } from "../../../types";
import * as S from "./styles";

interface FeaturedArtworksProps {
  artworks: Artwork[];
}

export const FeaturedArtworks: React.FC<FeaturedArtworksProps> = ({
  artworks,
}) => {
  const { t } = useLanguage();

  return (
    <S.FeaturedSection>
      <S.Container>
        <S.SectionTitle>{t("home.featuredArtworks")}</S.SectionTitle>

        <S.ArtworksGrid>
          {artworks.map((artwork) => (
            <S.ArtworkCard key={artwork.id} to={`/artwork/${artwork.id}`}>
              <S.ArtworkImage>
                <img src={artwork.thumbnailUrl} alt={artwork.title} />
                <S.ArtworkOverlay>
                  <S.ViewButton>{t("common.view")}</S.ViewButton>
                </S.ArtworkOverlay>
              </S.ArtworkImage>
              <S.ArtworkInfo>
                <S.ArtworkTitle>{artwork.title}</S.ArtworkTitle>
              </S.ArtworkInfo>
            </S.ArtworkCard>
          ))}
        </S.ArtworksGrid>

        <S.ViewAllButton to="/collections">
          {t("home.viewCollection")}
        </S.ViewAllButton>
      </S.Container>
    </S.FeaturedSection>
  );
};
