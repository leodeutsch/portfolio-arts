import React from "react";
import type { Serie } from "../../../types";
import { getImageKitUrl } from "../../../utils/imgkit";
import * as S from "./styles";

interface SerieCardProps {
  serie: Serie;
  loading?: "eager" | "lazy";
}

export const SerieCard: React.FC<SerieCardProps> = ({ serie }) => {
  return (
    <S.CardLink to={`/series/${serie.id}`}>
      <S.Card $backgroundImage={getImageKitUrl(serie.coverImage)}>
        <S.SerieInfo>
          <S.SerieName>{serie.name}</S.SerieName>
        </S.SerieInfo>
      </S.Card>
    </S.CardLink>
  );
};
