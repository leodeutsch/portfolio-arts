import React, { useEffect } from "react";
import type { Artwork } from "../../../types/";
import * as S from "./styles";

interface ArtworkModalProps {
  artwork: Artwork;
  onClose: () => void;
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({
  artwork,
  onClose,
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <S.ModalOverlay onClick={handleBackdropClick}>
      <S.ModalContent>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>

        <S.ImageContainer>
          <img src={artwork.imageUrl} alt={artwork.title} />
        </S.ImageContainer>

        <S.ArtworkInfo>
          <S.ArtworkTitle>{artwork.title}</S.ArtworkTitle>
          {artwork.description && (
            <S.ArtworkDescription>{artwork.description}</S.ArtworkDescription>
          )}
          {artwork.year && <S.ArtworkYear>{artwork.year}</S.ArtworkYear>}
        </S.ArtworkInfo>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};
