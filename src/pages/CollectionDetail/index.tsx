import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArtworkGrid } from "../../components/collections/ArtworkGrid";
import { useLanguage } from "../../contexts/LanguageContext";
import type { Artwork, Collection } from "../../types";
import * as S from "./styles";

// Mock data para as obras de cada coleção
const mockArtworksByCollection: Record<string, Artwork[]> = {
  "1": [
    {
      id: "1-1",
      title: "Mountain Serenity",
      collection: "Nature's Canvas",
      imageUrl: "/images/nature-1.jpg",
      thumbnailUrl: "/images/nature-1-thumb.jpg",
    },
    {
      id: "1-2",
      title: "Lake Reflection",
      collection: "Nature's Canvas",
      imageUrl: "/images/nature-2.jpg",
      thumbnailUrl: "/images/nature-2-thumb.jpg",
    },
    // Adicionar mais obras...
  ],
  "2": [
    {
      id: "2-1",
      title: "City Lights",
      collection: "Urban Echoes",
      imageUrl: "/images/urban-1.jpg",
      thumbnailUrl: "/images/urban-1-thumb.jpg",
    },
    // Adicionar mais obras...
  ],
  // Adicionar obras para outras coleções...
};

const mockCollections: Record<string, Collection> = {
  "1": {
    id: "1",
    name: "Nature's Canvas",
    description: "Paisagens naturais capturadas em momentos únicos",
    coverImage: "/images/nature-collection.jpg",
    artworks: [],
  },
  "2": {
    id: "2",
    name: "Urban Echoes",
    description: "A vida urbana através de uma perspectiva artística",
    coverImage: "/images/urban-collection.jpg",
    artworks: [],
  },
  // Adicionar outras coleções...
};

export const CollectionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [collection, setCollection] = useState<Collection | null>(null);
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      if (id && mockCollections[id]) {
        setCollection(mockCollections[id]);
        setArtworks(mockArtworksByCollection[id] || []);
      }
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleBack = () => {
    navigate("/collections");
  };

  if (loading) {
    return <S.LoadingContainer>{t("common.loading")}</S.LoadingContainer>;
  }

  if (!collection) {
    return <S.NotFound>Collection not found</S.NotFound>;
  }

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onClick={handleBack}>
          <S.BackIcon>←</S.BackIcon>
          {t("common.back")}
        </S.BackButton>

        <S.CollectionInfo>
          <S.CollectionTitle>{collection.name}</S.CollectionTitle>
          <S.CollectionDescription>
            {collection.description}
          </S.CollectionDescription>
          <S.ArtworkCount>
            {artworks.length} {t("collections.artworksCount")}
          </S.ArtworkCount>
        </S.CollectionInfo>
      </S.Header>

      <ArtworkGrid artworks={artworks} />
    </S.Container>
  );
};
