import React, { useState } from "react";
import { useLanguage } from "../../../hooks/useLanguage";
import type { Artwork } from "../../../types";
import { getImageKitUrl } from "../../../utils/imgkit";
import { Copyright } from "../../copyright";
import { ArtworkModal } from "../../series/ArtworkModal";
import * as S from "./styles";

interface FeaturedArtworksProps {
  artworks: Artwork[];
}

export const FeaturedArtworks: React.FC<FeaturedArtworksProps> = ({
  artworks,
}) => {
  const [selectedArtworkIndex, setSelectedArtworkIndex] = useState<
    number | null
  >(null);
  const { t } = useLanguage();

  const handleArtworkClick = (index: number) => {
    setSelectedArtworkIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedArtworkIndex(null);
  };

  return (
    <S.FeaturedSection>
      <S.Container>
        <S.SectionTitle>{t("home.featuredArtworks")}</S.SectionTitle>

        <S.ArtworksGrid>
          {artworks.map((artwork, index) => (
            <S.ArtworkCard
              key={artwork.id}
              onClick={() => handleArtworkClick(index)}
              $backgroundImage={getImageKitUrl(artwork.thumbnailUrl)}
            >
              <S.ArtworkInfo>
                <S.ArtworkTitle>{artwork.title}</S.ArtworkTitle>
              </S.ArtworkInfo>
            </S.ArtworkCard>
          ))}
        </S.ArtworksGrid>

        {selectedArtworkIndex !== null && (
          <ArtworkModal
            artworks={artworks}
            currentIndex={selectedArtworkIndex}
            onClose={handleCloseModal}
            showNavigation={false}
          />
        )}

        <S.ViewAllButton to="/series/1">{t("home.viewSerie")}</S.ViewAllButton>
      </S.Container>

      <Copyright />
    </S.FeaturedSection>
  );
};
