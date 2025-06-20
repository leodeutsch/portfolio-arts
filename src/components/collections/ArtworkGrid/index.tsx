import React, { useState } from "react";
import type { Artwork } from "../../../types/";
import { getImageKitUrl } from "../../../utils/imgkit";
import { ArtworkModal } from "../ArtworkModal";
import * as S from "./styles";

interface ArtworkGridProps {
  artworks: Artwork[];
}

export const ArtworkGrid: React.FC<ArtworkGridProps> = ({ artworks }) => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleCloseModal = () => {
    setSelectedArtwork(null);
  };

  return (
    <>
      <S.Grid>
        {artworks.map((artwork) => (
          <S.ArtworkItem
            key={artwork.id}
            onClick={() => handleArtworkClick(artwork)}
          >
            <S.ArtworkImage>
              <img
                src={getImageKitUrl(artwork.thumbnailUrl)}
                alt={artwork.title}
              />
              <S.ArtworkOverlay>
                <S.ArtworkTitle>{artwork.title}</S.ArtworkTitle>
              </S.ArtworkOverlay>
            </S.ArtworkImage>
          </S.ArtworkItem>
        ))}
      </S.Grid>

      {selectedArtwork && (
        <ArtworkModal artwork={selectedArtwork} onClose={handleCloseModal} />
      )}
    </>
  );
};
