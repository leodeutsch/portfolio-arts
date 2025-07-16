import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArtworkGrid } from "../../components/collections/ArtworkGrid";
import { Copyright } from "../../components/copyright";
import { useLanguage } from "../../contexts/LanguageContext";
import { fetchCollectionById } from "../../services/collectionService";
import type { Collection } from "../../types";
import * as S from "./styles";

export const CollectionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [collection, setCollection] = useState<Collection | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetchCollectionById(id)
      .then((col) => setCollection(col || null))
      .finally(() => setLoading(false));
  }, [id]);

  const handleBack = () => {
    navigate("/collection");
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
            {collection.artworks.length} {t("collections.artworksCount")}
          </S.ArtworkCount>
        </S.CollectionInfo>
      </S.Header>
      <ArtworkGrid artworks={collection.artworks} />
      <Copyright />
    </S.Container>
  );
};
