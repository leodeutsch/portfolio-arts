import React, { useEffect, useState } from "react";
import { Copyright } from "../../components/copyright";
import { SerieCard } from "../../components/series/SerieCard";
import { useLanguage } from "../../hooks/useLanguage";
import { fetchSeries } from "../../services/serieService";
import type { Serie } from "../../types";
import * as S from "./styles";

export const Series: React.FC = () => {
  const [series, setSeries] = useState<Serie[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    fetchSeries()
      .then(setSeries)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <S.LoadingContainer>{t("common.loading")}</S.LoadingContainer>;
  }

  return (
    <S.SeriesContainer>
      <S.Header>
        <S.Title>{t("series.title")}</S.Title>
        <S.Description>{t("series.description")}</S.Description>
      </S.Header>
      <S.SeriesGrid>
        {series.map((serie) => (
          <SerieCard key={serie.id} serie={serie} />
        ))}
      </S.SeriesGrid>
      <Copyright />
    </S.SeriesContainer>
  );
};
