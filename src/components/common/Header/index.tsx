import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../../contexts/LanguageContext";
import * as S from "./styles";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { path: "/", label: t("nav.dashboard") },
    { path: "/collection", label: t("nav.collections") },
    { path: "/about", label: t("nav.about") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.Logo to="/">
          <S.LogoText>Rosa Rocha</S.LogoText>
        </S.Logo>

        <S.MenuButton
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          isOpen={isMenuOpen}
        >
          {!isMenuOpen ? <Menu size={32} /> : <X size={32} />}
        </S.MenuButton>

        <S.Nav isOpen={isMenuOpen}>
          <S.NavList>
            {navItems.map((item) => (
              <S.NavItem key={item.path}>
                <S.NavLink
                  to={item.path}
                  active={location.pathname === item.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </S.NavLink>
              </S.NavItem>
            ))}
          </S.NavList>
        </S.Nav>

        <S.LanguageButton onClick={toggleLanguage}>
          {language === "pt" ? "EN" : "PT"}
        </S.LanguageButton>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};
