import { ChevronLeft, ChevronRight, CircleX } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import { useLanguage } from "../../../hooks/useLanguage";
import type { Artwork } from "../../../types/";
import { getImageKitUrl, getSrcSet } from "../../../utils/imgkit";
import * as S from "./styles";

interface ArtworkModalProps {
  artworks: Artwork[];
  currentIndex: number;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  showNavigation?: boolean;
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({
  artworks,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
  showNavigation = true, // Default to true
}) => {
  const { t } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [orientation, setOrientation] = useState<"portrait" | "landscape">(
    "landscape"
  );

  const artwork = artworks[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (showNavigation && e.key === "ArrowRight" && onNext) {
        onNext();
      } else if (showNavigation && e.key === "ArrowLeft" && onPrevious) {
        onPrevious();
      }
    },
    [onClose, onNext, onPrevious, showNavigation]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    setImageLoaded(false); // Reset loading state for new image

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [currentIndex, handleKeyDown]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    if (naturalHeight > naturalWidth) {
      setOrientation("portrait");
    } else {
      setOrientation("landscape");
    }
    setImageLoaded(true);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!artwork) return null;

  return (
    <S.ModalOverlay onClick={handleBackdropClick}>
      <S.ModalContent $orientation={orientation}>
        {imageLoaded && (
          <>
            <S.CloseButton onClick={onClose}>
              <CircleX size={32} color="white" aria-label={t("common.close")} />
            </S.CloseButton>
            {showNavigation && onPrevious && (
              <S.PrevButton onClick={onPrevious}>
                <ChevronLeft size={48} color="rgba(255, 255, 255, 0.8)" />
              </S.PrevButton>
            )}
            {showNavigation && onNext && (
              <S.NextButton onClick={onNext}>
                <ChevronRight size={48} color="rgba(255, 255, 255, 0.8)" />
              </S.NextButton>
            )}
          </>
        )}

        <S.ImageContainer>
          {!imageLoaded && (
            <S.LoadingMessage>{t("common.loading")}</S.LoadingMessage>
          )}
          <img
            srcSet={getSrcSet(artwork.imageUrl)}
            sizes="(max-width: 768px) 100vw, 80vw"
            src={getImageKitUrl(artwork.imageUrl)}
            alt={artwork.title}
            onLoad={handleImageLoad}
            key={artwork.id}
          />
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
