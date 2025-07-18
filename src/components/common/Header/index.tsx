import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../../hooks/useLanguage";
import * as S from "./styles";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { path: "/", label: t("nav.dashboard") },
    { path: "/series", label: t("nav.series") },
    { path: "/about", label: t("nav.about") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const isPathActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

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
                  active={isPathActive(item.path)}
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
