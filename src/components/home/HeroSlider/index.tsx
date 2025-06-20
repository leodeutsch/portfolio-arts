import React, { useEffect, useState } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import type { Artwork } from "../../../types";
import * as S from "./styles";

interface HeroSliderProps {
  artworks: Artwork[];
  collectionName: string;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  artworks,
  collectionName,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % artworks.length);
    }, 5000); // Muda slide a cada 5 segundos

    return () => clearInterval(interval);
  }, [artworks.length]);

  return (
    <S.SliderContainer>
      <S.SliderWrapper>
        {artworks.map((artwork, index) => (
          <S.Slide
            key={artwork.id}
            active={index === currentIndex}
            style={{ backgroundImage: `url(${artwork.imageUrl})` }}
          />
        ))}
      </S.SliderWrapper>

      <S.SliderContent>
        <S.CollectionTitle>{t("home.recentWork")}</S.CollectionTitle>
        <S.CollectionName>{collectionName}</S.CollectionName>
      </S.SliderContent>

      <S.Indicators>
        {artworks.map((_, index) => (
          <S.Indicator
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </S.Indicators>
    </S.SliderContainer>
  );
};
