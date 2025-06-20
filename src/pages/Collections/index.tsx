import React, { useEffect, useState } from "react";
import { CollectionCard } from "../../components/collections/CollectionCard";
import { Copyright } from "../../components/copyright";
import { useLanguage } from "../../contexts/LanguageContext";
import { fetchCollections } from "../../services/collectionService";
import type { Collection } from "../../types/";
import * as S from "./styles";

export const Collections: React.FC = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    fetchCollections()
      .then(setCollections)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <S.LoadingContainer>{t("common.loading")}</S.LoadingContainer>;
  }

  return (
    <S.CollectionsContainer>
      <S.Header>
        <S.Title>{t("collections.title")}</S.Title>
        <S.Description>{t("collections.description")}</S.Description>
      </S.Header>
      <S.CollectionsGrid>
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </S.CollectionsGrid>
      <Copyright />
    </S.CollectionsContainer>
  );
};
