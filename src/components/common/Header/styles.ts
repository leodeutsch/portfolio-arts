import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { media } from "../../../styles/breakpoints";

export const HeaderWrapper = styled.header<{
  visible: boolean;
  $transparent?: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme, $transparent }) =>
    $transparent ? "transparent" : theme.colors.background};
  box-shadow: ${({ theme, $transparent }) =>
    $transparent ? "none" : theme.shadows.small};
  z-index: 1000;
  transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out,
    background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  transform: ${({ visible }) =>
    visible ? "translateY(0)" : "translateY(-100%)"};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;

export const HeaderContainer = styled.div`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
  height: ${({ theme }) => theme.sizes.headerHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  z-index: 1001;
`;

export const LogoText = styled.h1<{ $transparent?: boolean }>`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme, $transparent }) =>
    $transparent ? "white" : theme.colors.secondary};
  text-shadow: ${({ $transparent }) =>
    $transparent ? "0 2px 4px rgba(0, 0, 0, 0.3)" : "none"};
  transition: color 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
`;

export const Nav = styled.nav<{
  isOpen: boolean;
  $transparent?: boolean;
}>`
  ${media.tablet} {
    position: fixed;
    top: ${({ isOpen, theme }) => (isOpen ? theme.sizes.headerHeight : 0)};
    left: 0;
    right: 0;
    background-color: ${({ theme, $transparent }) =>
      $transparent ? "rgba(0, 0, 0, 0.9)" : theme.colors.background};
    transform: translateY(${({ isOpen }) => (isOpen ? "0" : "-100%")});
    transition: transform ${({ theme }) => theme.transitions.default},
      background-color 0.3s ease-in-out;
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  ${media.tablet} {
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled(Link)<{
  active: boolean;
  $transparent?: boolean;
}>`
  font-weight: 500;
  color: ${({ theme, active, $transparent }) => {
    if ($transparent) {
      return active ? theme.colors.primary : "rgba(255, 255, 255, 0.9)";
    }
    return active ? theme.colors.primary : theme.colors.text;
  }};
  text-shadow: ${({ $transparent, active }) => {
    if ($transparent) {
      return active
        ? "0 1.5px 3.5px rgba(0, 0, 0, 1)"
        : "0 1px 3px rgba(0, 0, 0, 0.4)";
    }
  }};
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease-in-out, text-shadow 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: ${({ $transparent, theme }) =>
      $transparent
        ? `0 1px 3px rgba(0, 0, 0, 0.6), 0 0 8px ${theme.colors.primary}40`
        : "none"};
  }

  ${({ active, $transparent, theme }) =>
    active &&
    css`
      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: ${theme.colors.primary};
        box-shadow: ${$transparent ? "0 1px 3px rgba(0, 0, 0, 0.3)" : "none"};
      }
    `}
`;

export const LanguageButton = styled.button<{ $transparent?: boolean }>`
  font-weight: 600;
  color: ${({ theme, $transparent }) =>
    $transparent ? "rgba(255, 255, 255, 0.9)" : theme.colors.text};
  text-shadow: ${({ $transparent }) =>
    $transparent ? "0 1px 3px rgba(0, 0, 0, 0.4)" : "none"};
  padding: 0.5rem 1rem;
  border: 2px solid
    ${({ theme, $transparent }) =>
      $transparent ? "rgba(255, 255, 255, 0.3)" : theme.colors.border};
  border-radius: 4px;
  box-shadow: ${({ $transparent }) =>
    $transparent ? "0 2px 8px rgba(0, 0, 0, 0.2)" : "none"};
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: ${({ $transparent, theme }) =>
      $transparent
        ? `0 1px 3px rgba(0, 0, 0, 0.6), 0 0 8px ${theme.colors.primary}40`
        : "none"};
    box-shadow: ${({ $transparent, theme }) =>
      $transparent
        ? `0 2px 12px rgba(0, 0, 0, 0.3), 0 0 8px ${theme.colors.primary}20`
        : "none"};
  }
`;

export const MenuButton = styled.button<{
  isOpen: boolean;
  $transparent?: boolean;
}>`
  display: none;
  color: ${({ theme, $transparent }) =>
    $transparent ? "white" : theme.colors.secondary};
  filter: ${({ $transparent }) =>
    $transparent ? "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))" : "none"};
  transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;

  ${media.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 22px;
    z-index: 1001;

    span {
      height: 2px;
      width: 100%;
      background-color: ${({ theme, $transparent }) =>
        $transparent ? "white" : theme.colors.secondary};
      filter: ${({ $transparent }) =>
        $transparent ? "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4))" : "none"};
      transition: transform ${({ theme }) => theme.transitions.default},
        opacity ${({ theme }) => theme.transitions.default},
        background-color 0.3s ease-in-out, filter 0.3s ease-in-out;
    }

    ${({ isOpen }) =>
      isOpen &&
      css`
        span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        span:nth-child(2) {
          opacity: 0;
        }
        span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      `}
  }

  ${media.mobile} {
    width: 24px;
    height: 18px;
  }
`;
