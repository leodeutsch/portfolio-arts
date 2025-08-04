import React, { useState } from "react";
import type { Artwork } from "../../../types/";
import { getImageKitUrl } from "../../../utils/imgkit";
import { ArtworkModal } from "../ArtworkModal";
import * as S from "./styles";

interface ArtworkGridProps {
  artworks: Artwork[];
}

export const ArtworkGrid: React.FC<ArtworkGridProps> = ({ artworks }) => {
  const [selectedArtworkIndex, setSelectedArtworkIndex] = useState<number | null>(
    null
  );

  const handleArtworkClick = (index: number) => {
    setSelectedArtworkIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedArtworkIndex(null);
  };

  const handleNext = () => {
    if (selectedArtworkIndex === null) return;
    const nextIndex = (selectedArtworkIndex + 1) % artworks.length;
    setSelectedArtworkIndex(nextIndex);
  };

  const handlePrevious = () => {
    if (selectedArtworkIndex === null) return;
    const prevIndex =
      (selectedArtworkIndex - 1 + artworks.length) % artworks.length;
    setSelectedArtworkIndex(prevIndex);
  };

  return (
    <>
      <S.Grid>
        {artworks.map((artwork, index) => (
          <S.ArtworkItem
            key={artwork.id}
            onClick={() => handleArtworkClick(index)}
          >
            <S.ArtworkImage>
              <img
                src={getImageKitUrl(artwork.thumbnailUrl)}
                alt={artwork.title}
                loading={index < 4 ? "eager" : "lazy"}
              />
              <S.ArtworkOverlay>
                <S.ArtworkTitle>{artwork.title}</S.ArtworkTitle>
              </S.ArtworkOverlay>
            </S.ArtworkImage>
          </S.ArtworkItem>
        ))}
      </S.Grid>

      {selectedArtworkIndex !== null && (
        <ArtworkModal
          artworks={artworks}
          currentIndex={selectedArtworkIndex}
          onClose={handleCloseModal}
          onNext={handleNext}
          onPrevious={handlePrevious}
          showNavigation={true}
        />
      )}
    </>
  );
};
