import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { CopyrightText } from "./styles";

export const Copyright: React.FC = () => {
  const { t } = useLanguage();
  return (
    <CopyrightText>
      ©2025 Rosa Rocha. {t("about.allRightsReserved")}
    </CopyrightText>
  );
};
