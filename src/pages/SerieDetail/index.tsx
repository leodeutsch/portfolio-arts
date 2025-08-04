import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Copyright } from "../../components/copyright";
import { ArtworkGrid } from "../../components/series/ArtworkGrid";
import { useLanguage } from "../../hooks/useLanguage";
import { fetchSerieById } from "../../services/serieService";
import type { Serie } from "../../types";
import { getSerieDescription } from "../../utils/seriesDescriptions";
import * as S from "./styles";

export const SerieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [serie, setSerie] = useState<Serie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setError(null);
    fetchSerieById(id)
      .then((col) => setSerie(col || null))
      .catch((err) => {
        setError(t("common.errorLoadingData"));
        setSerie(null);
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [id, t]);

  const handleBack = () => {
    navigate("/series");
  };

  if (loading) {
    return <S.LoadingContainer>{t("common.loading")}</S.LoadingContainer>;
  }

  if (error) {
    return <S.ErrorContainer>{error}</S.ErrorContainer>;
  }

  if (!serie) {
    return <S.NotFound>Série não encontrada / Serie not found</S.NotFound>;
  }

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onClick={handleBack}>
          <ArrowLeft size={20} />
          {t("common.back")}
        </S.BackButton>
        <S.SerieInfo>
          <S.SerieTitle>{serie.name}</S.SerieTitle>
          <S.SerieDescription>
            {getSerieDescription(serie.id, t)}
          </S.SerieDescription>
          <S.ArtworkCount>
            export const SerieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [serie, setSerie] = useState<Serie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setError(null);
    fetchSerieById(id)
      .then((col) => setSerie(col || null))
      .catch((err) => {
        setError(t("common.errorLoadingData"));
        setSerie(null);
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [id, t]);

  const handleBack = () => {
    navigate("/series");
  };

  if (loading) {
    return <S.LoadingContainer>{t("common.loading")}</S.LoadingContainer>;
  }

  if (error) {
    return <S.ErrorContainer>{error}</S.ErrorContainer>;
  }

  if (!serie) {
    return <S.NotFound>Série não encontrada / Serie not found</S.NotFound>;
  }

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onClick={handleBack}>
          <ArrowLeft size={20} />
          {t("common.back")}
        </S.BackButton>
        <S.SerieInfo>
          <S.SerieTitle>{serie.name}</S.SerieTitle>
          <S.SerieDescription>
            {getSerieDescription(serie.id, t)}
          </S.SerieDescription>
          <S.ArtworkCount>
            {t("series.artworksCount") + " " + serie?.artworks.length}
          </S.ArtworkCount>
        </S.SerieInfo>
      </S.Header>
      <ArtworkGrid artworks={serie.artworks} />
      <Copyright />
    </S.Container>
  );
};
          </S.ArtworkCount>
        </S.SerieInfo>
      </S.Header>
      <ArtworkGrid artworks={serie.artworks} />
      <Copyright />
    </S.Container>
  );
};
