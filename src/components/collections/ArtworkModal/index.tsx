import React, { useEffect, useState } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import type { Artwork } from "../../../types/";
import { getImageKitUrl } from "../../../utils/imgkit";
import * as S from "./styles";

interface ArtworkModalProps {
  artwork: Artwork;
  onClose: () => void;
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({
  artwork,
  onClose,
}) => {
  const { t } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [orientation, setOrientation] = useState<"portrait" | "landscape">(
    "landscape"
  );

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

  return (
    <S.ModalOverlay onClick={handleBackdropClick}>
      <S.ModalContent $orientation={orientation}>
        {imageLoaded && <S.CloseButton onClick={onClose}>×</S.CloseButton>}

        <S.ImageContainer>
          {!imageLoaded && (
            <S.LoadingMessage>{t("common.loading")}</S.LoadingMessage>
          )}
          <img
            src={getImageKitUrl(artwork.imageUrl)}
            alt={artwork.title}
            onLoad={handleImageLoad}
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
