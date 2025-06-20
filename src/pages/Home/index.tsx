import React, { useEffect, useState } from "react";
import { FeaturedArtworks } from "../../components/home/FeaturedArtworks";
import { HeroSlider } from "../../components/home/HeroSlider";
import type { Artwork, Collection } from "../../types/";
import * as S from "./styles";

export const Home: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/collections.json")
      .then((res) => res.json())
      .then((collections: Collection[]) => {
        // Flatten all artworks from all collections
        const allArtworks = collections.flatMap((col) =>
          col.artworks.map((art) => ({
            ...art,
            collection: col.name,
          }))
        );
        setArtworks(allArtworks);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <S.LoadingContainer>Carregando...</S.LoadingContainer>;
  }

  const sliderArtworks = artworks.slice(0, 3);
  const featuredArtworks = artworks.slice(0, 4);

  return (
    <S.HomeContainer>
      <HeroSlider
        artworks={sliderArtworks}
        collectionName={sliderArtworks[0]?.collection || ""}
      />
      <FeaturedArtworks artworks={featuredArtworks} />
    </S.HomeContainer>
  );
};
