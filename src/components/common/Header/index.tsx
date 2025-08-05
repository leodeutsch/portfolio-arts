import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../../hooks/useLanguage";
import * as S from "./styles";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isTransparent, setIsTransparent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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

  const isHomePage = location.pathname === "/";

  // Check if device is mobile/tablet
  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(isMobileDevice);
      return isMobileDevice;
    };

    const isMobileDevice = checkIsMobile();

    // Set initial transparency only on desktop and home page
    if (isHomePage && !isMobileDevice) {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }

    const handleResize = () => {
      const isMobileDevice = checkIsMobile();

      // Update transparency on resize
      if (isHomePage && !isMobileDevice) {
        // Check current scroll position
        const currentScrollY = window.scrollY;
        const scrollProgress = Math.min(
          currentScrollY / (window.innerHeight * 0.5),
          1
        );
        setIsTransparent(scrollProgress < 1);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isHomePage]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = window.innerHeight * 0.3;

      // Closes menu on scroll on mobile
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }

      // Handle transparency on home page (only on desktop)
      if (isHomePage && !isMobile) {
        const scrollProgress = Math.min(
          currentScrollY / (window.innerHeight * 0.5),
          1
        );
        setIsTransparent(scrollProgress < 1);
      }

      // Header visibility on scroll
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
  }, [isMenuOpen, isHomePage, isMobile]);

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
    <S.HeaderWrapper visible={isVisible} $transparent={isTransparent}>
      <S.HeaderContainer>
        <S.Logo to="/">
          <S.LogoText $transparent={isTransparent}>Rosa Rocha</S.LogoText>
        </S.Logo>

        <S.RightSection>
          <S.Nav ref={navRef} isOpen={isMenuOpen} $transparent={isTransparent}>
            <S.NavList>
              {navItems.map((item) => (
                <S.NavItem key={item.path}>
                  <S.NavLink
                    to={item.path}
                    active={isPathActive(item.path)}
                    onClick={() => setIsMenuOpen(false)}
                    $transparent={isTransparent}
                  >
                    {item.label}
                  </S.NavLink>
                </S.NavItem>
              ))}
            </S.NavList>
          </S.Nav>

          <S.LanguageButton
            onClick={toggleLanguage}
            $transparent={isTransparent}
          >
            {language === "pt" ? "EN" : "PT"}
          </S.LanguageButton>

          <S.MenuButton
            ref={menuButtonRef}
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            isOpen={isMenuOpen}
            $transparent={isTransparent}
          >
            {!isMenuOpen ? <Menu size={32} /> : <X size={32} />}
          </S.MenuButton>
        </S.RightSection>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};
