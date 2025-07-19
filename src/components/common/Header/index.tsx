import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../../hooks/useLanguage";
import * as S from "./styles";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = window.innerHeight * 0.3;

      // Closes menu on scroll on mobile
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > threshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <S.HeaderWrapper visible={isVisible}>
      <S.HeaderContainer>
        <S.Logo to="/">
          <S.LogoText>Rosa Rocha</S.LogoText>
        </S.Logo>

        <S.MenuButton
          ref={menuButtonRef}
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          isOpen={isMenuOpen}
        >
          {!isMenuOpen ? <Menu size={32} /> : <X size={32} />}
        </S.MenuButton>

        <S.Nav ref={navRef} isOpen={isMenuOpen}>
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
