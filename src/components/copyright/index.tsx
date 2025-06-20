import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { CopyrightText } from "./styles";

export const Copyright: React.FC = () => {
  const { t } = useLanguage();
  return (
    <CopyrightText>
      ©2025 Rosa Rocha. {t("about.allRightsReserved")}
    </CopyrightText>
  );
};
