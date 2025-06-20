import React from "react";
import { useNavigate } from "react-router-dom";
import type { Collection } from "../../../types";
import * as S from "./styles";

interface CollectionCardProps {
  collection: Collection;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({
  collection,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/collection/${collection.id}`);
  };

  return (
    <S.Card onClick={handleClick}>
      <S.ImageContainer>
        <S.Image src={collection.coverImage} alt={collection.name} />
        <S.Overlay>
          <S.ViewButton>View Collection</S.ViewButton>
        </S.Overlay>
      </S.ImageContainer>
      <S.Title>{collection.name}</S.Title>
    </S.Card>
  );
};
