import React, { useEffect, useState } from "react";
import { CollectionCard } from "../../components/collections/CollectionCard";
import { useLanguage } from "../../contexts/LanguageContext";
import type { Collection } from "../../types/";
import * as S from "./styles";

// Mock data - substituir com API real
const mockCollections: Collection[] = [
  {
    id: "1",
    name: "Nature's Canvas",
    description: "Paisagens naturais capturadas em momentos únicos",
    coverImage: "/images/nature-collection.jpg",
    artworks: [],
  },
  {
    id: "2",
    name: "Urban Echoes",
    description: "A vida urbana através de uma perspectiva artística",
    coverImage: "/images/urban-collection.jpg",
    artworks: [],
  },
  {
    id: "3",
    name: "Abstract Visions",
    description: "Formas e cores que transcendem a realidade",
    coverImage: "/images/abstract-collection.jpg",
    artworks: [],
  },
  {
    id: "4",
    name: "Portraits of Reflection",
    description: "Retratos que capturam a essência humana",
    coverImage: "/images/portraits-collection.jpg",
    artworks: [],
  },
  {
    id: "5",
    name: "Sculptural Forms",
    description: "Explorando dimensões através da forma",
    coverImage: "/images/sculptural-collection.jpg",
    artworks: [],
  },
  {
    id: "6",
    name: "Digital Dreams",
    description: "Arte digital contemporânea",
    coverImage: "/images/digital-collection.jpg",
    artworks: [],
  },
];

export const Collections: React.FC = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      setCollections(mockCollections);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <S.LoadingContainer>{t("common.loading")}</S.LoadingContainer>;
  }

  return (
    <S.CollectionsContainer>
      <S.Header>
        <S.Title>{t("collections.title")}</S.Title>
        <S.Description>
          {t("collections.description") ||
            "Explore the diverse range of artistic collections, each showcasing a unique theme and style. Dive into the galleries to discover individual artworks within each collection."}
        </S.Description>
      </S.Header>

      <S.CollectionsGrid>
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </S.CollectionsGrid>
    </S.CollectionsContainer>
  );
};
