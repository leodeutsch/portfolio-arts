import React, { useEffect, useState } from "react";
import { FeaturedArtworks } from "../../components/home/FeaturedArtworks";
import { HeroSlider } from "../../components/home/HeroSlider";
import type { Artwork } from "../../types/";
import * as S from "./styles";

// Mock data - substituir com API real
const mockArtworks: Artwork[] = [
  {
    id: "1",
    title: "Paisagem Serena",
    collection: "Natureza Abstrata",
    imageUrl: "/images/artwork1.jpg",
    thumbnailUrl: "/images/artwork1-thumb.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "Reflexões Urbanas",
    collection: "Cidade Moderna",
    imageUrl: "/images/artwork2.jpg",
    thumbnailUrl: "/images/artwork2-thumb.jpg",
    featured: true,
  },
  // Adicionar mais obras aqui
];

export const Home: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      setArtworks(mockArtworks);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <S.LoadingContainer>Carregando...</S.LoadingContainer>;
  }

  const sliderArtworks = artworks.slice(0, 3);
  const featuredArtworks = artworks.filter((art) => art.featured).slice(0, 5);

  return (
    <S.HomeContainer>
      <HeroSlider
        artworks={sliderArtworks}
        collectionName="Natureza Abstrata"
      />
      <FeaturedArtworks artworks={featuredArtworks} />
    </S.HomeContainer>
  );
};
