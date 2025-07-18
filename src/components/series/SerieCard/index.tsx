import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../hooks/useLanguage";
import type { Serie } from "../../../types";
import { getImageKitUrl } from "../../../utils/imgkit";
import * as S from "./styles";

interface SerieCardProps {
  serie: Serie;
}

export const SerieCard: React.FC<SerieCardProps> = ({ serie }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/series/${serie.id}`);
  };

  return (
    <S.Card onClick={handleClick}>
      <S.ImageContainer>
        <S.Image src={getImageKitUrl(serie.coverImage)} alt={serie.name} />
        <S.Overlay>
          <S.ViewButton>{t("series.viewSerie")}</S.ViewButton>
        </S.Overlay>
      </S.ImageContainer>
      <S.Title>{serie.name}</S.Title>
    </S.Card>
  );
};
