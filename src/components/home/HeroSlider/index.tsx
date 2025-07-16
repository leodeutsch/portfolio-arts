import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import { breakpoints } from "../../../styles/breakpoints";
import type { Artwork } from "../../../types";
import { getImageKitUrl } from "../../../utils/imgkit";
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
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const checkIsMobile = () => {
      const matchMobile = window.matchMedia(
        `(max-width: ${breakpoints.tablet})`
      ).matches;
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMobile(matchMobile || hasTouch);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleClickNext = () => {
    if (currentIndex === artworks.length - 1) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex((prev) => (prev + 1) % artworks.length);
  };
  const handleClickPrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(artworks.length - 1);
      return;
    }
    setCurrentIndex((prev) => (prev === 0 ? artworks.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % artworks.length);
    }, 5000); // Muda slide a cada 5 segundos

    return () => clearInterval(interval);
  }, [artworks.length]);

  return (
    <S.SliderContainer>
      <S.SliderWrapper
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <S.ArrowButton
          left
          hovered={hovered || isMobile}
          onClick={handleClickPrev}
        >
          <ChevronLeft size={40} color="rgba(255, 255, 255, 0.6)" />
        </S.ArrowButton>
        {artworks.map((artwork, index) => (
          <S.Slide
            key={artwork.id}
            active={index === currentIndex}
            style={{
              backgroundImage: `url(${getImageKitUrl(artwork.imageUrl)})`,
            }}
          />
        ))}
        <S.ArrowButton
          right
          hovered={hovered || isMobile}
          onClick={handleClickNext}
        >
          <ChevronRight size={40} color="rgba(255, 255, 255, 0.6)" />
        </S.ArrowButton>
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
