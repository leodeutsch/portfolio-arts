import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLanguage } from "../../../hooks/useLanguage";
import { breakpoints } from "../../../styles/breakpoints";
import type { Artwork } from "../../../types";
import { getImageKitUrl } from "../../../utils/imgkit";
import * as S from "./styles";

interface HeroSliderProps {
  artworks: Artwork[];
  serieName: string;
  theaterMode?: boolean;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  artworks,
  serieName,
  theaterMode = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollTransitionComplete, setIsScrollTransitionComplete] = useState(
    !theaterMode
  );
  const [animationKey, setAnimationKey] = useState(Date.now());
  const { t } = useLanguage();

  // Reset animation whenever currentIndex changes
  useEffect(() => {
    setAnimationKey(Date.now());
  }, [currentIndex]);

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

  useEffect(() => {
    if (!theaterMode) return;

    const handleWheel = (e: WheelEvent) => {
      if (isScrollTransitionComplete) return;

      if (e.deltaY > 0) {
        const newProgress = Math.min(scrollProgress + 0.02, 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setIsScrollTransitionComplete(true);
        }

        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [theaterMode, scrollProgress, isScrollTransitionComplete]);

  const handleClickNext = () => {
    if (!isScrollTransitionComplete) return;

    if (currentIndex === artworks.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleClickPrev = () => {
    if (!isScrollTransitionComplete) return;

    if (currentIndex === 0) {
      setCurrentIndex(artworks.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleIndicatorClick = (index: number) => {
    if (!isScrollTransitionComplete) return;
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isScrollTransitionComplete) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % artworks.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [artworks.length, isScrollTransitionComplete, currentIndex]);

  const showControls = !theaterMode || isScrollTransitionComplete;

  return (
    <S.SliderContainer $theaterMode={theaterMode}>
      <S.SliderWrapper
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        $theaterMode={theaterMode}
        $scrollProgress={scrollProgress}
      >
        {showControls && (
          <>
            <S.ArrowButton
              $left
              $hovered={hovered || isMobile}
              onClick={handleClickPrev}
            >
              <ChevronLeft size={40} color="rgba(255, 255, 255, 0.6)" />
            </S.ArrowButton>
            <S.ArrowButton
              $right
              $hovered={hovered || isMobile}
              onClick={handleClickNext}
            >
              <ChevronRight size={40} color="rgba(255, 255, 255, 0.6)" />
            </S.ArrowButton>
          </>
        )}

        {artworks.map((artwork, index) => (
          <S.Slide
            key={artwork.id}
            active={index === currentIndex}
            $theaterMode={theaterMode}
            $scrollProgress={scrollProgress}
            style={{
              backgroundImage: `url(${getImageKitUrl(artwork.imageUrl)})`,
            }}
          />
        ))}
      </S.SliderWrapper>

      {showControls && (
        <>
          <S.SliderContent $scrollProgress={scrollProgress}>
            <S.SerieTitle>{t("home.recentWork")}</S.SerieTitle>
            <S.SerieName>{serieName}</S.SerieName>
          </S.SliderContent>

          <S.Indicators>
            {artworks.map((_, index) => (
              <S.Indicator
                key={`${index}-${animationKey}`}
                active={index === currentIndex}
                onClick={() => handleIndicatorClick(index)}
                $animationKey={animationKey}
              />
            ))}
          </S.Indicators>
        </>
      )}
    </S.SliderContainer>
  );
};
