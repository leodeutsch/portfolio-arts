import React, { useEffect, useState } from "react";
import { FeaturedArtworks } from "../../components/home/FeaturedArtworks";
import { HeroSlider } from "../../components/home/HeroSlider";
import type { Artwork, Serie } from "../../types/";
import * as S from "./styles";

export const Home: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/series.json")
      .then((res) => res.json())
      .then((series: Serie[]) => {
        const allArtworks = series.flatMap((serie) =>
          serie.artworks.map((art: any) => ({
            ...art,
            serie: serie.name,
          }))
        );
        setArtworks(allArtworks);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <S.LoadingContainer>Carregando...</S.LoadingContainer>;
  }

  // Predefined artworks for the slider and featured section with the artist
  const slideSelection = ["1-1", "1-3", "1-9", "1-11"];
  const featuredSelection = [
    "1-1",
    "1-2",
    "1-3",
    "1-7",
    "1-9",
    "1-10",
    "1-11",
    "1-13",
  ];
  const sliderArtworks = artworks.filter((artwork) =>
    slideSelection.some((id) => artwork.id === id)
  );
  const featuredArtworks = artworks.filter((artwork) =>
    featuredSelection.some((id) => artwork.id === id)
  );

  return (
    <S.HomeContainer>
      <HeroSlider
        artworks={sliderArtworks}
        serieName={sliderArtworks[0]?.serie || ""}
      />
      <FeaturedArtworks artworks={featuredArtworks} />
    </S.HomeContainer>
  );
};
