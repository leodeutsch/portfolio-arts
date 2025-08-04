import React from "react";
import { Link } from "react-router-dom";
import type { Serie } from "../../../types";
import { getImageKitUrl } from "../../../utils/imgkit";
import * as S from "./styles";

interface SerieCardProps {
  serie: Serie;
  loading?: "eager" | "lazy";
}

export const SerieCard: React.FC<SerieCardProps> = ({
  serie,
  loading = "lazy",
}) => {
  return (
    <Link to={`/series/${serie.id}`}>
      <S.Card>
        <S.CoverImage
          src={getImageKitUrl(serie.coverImage)}
          alt={serie.name}
          loading={loading}
        />
        <S.SerieInfo>
          <S.SerieName>{serie.name}</S.SerieName>
        </S.SerieInfo>
      </S.Card>
    </Link>
  );
};
