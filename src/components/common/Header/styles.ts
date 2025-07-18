import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { media } from "../../../styles/breakpoints";

export const HeaderWrapper = styled.header<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.small};
  z-index: 1000;
  transition:
    transform 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  transform: ${({ visible }) => (visible ? "translateY(0)" : "translateY(-100%)")};
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

export const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Nav = styled.nav<{ isOpen: boolean }>`
  ${media.tablet} {
    position: fixed;
    top: ${({ isOpen, theme }) => (isOpen ? theme.sizes.headerHeight : 0)};
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.background};
    transform: translateY(${({ isOpen }) => (isOpen ? "0" : "-100%")});
    transition: transform ${({ theme }) => theme.transitions.default};
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

export const NavLink = styled(Link)<{ active: boolean }>`
  font-weight: 500;
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.text};
  padding: 0.5rem 0;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ active }) =>
    active &&
    css`
      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.primary};
      }
    `}
`;

export const LanguageButton = styled.button`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MenuButton = styled.button<{ isOpen: boolean }>`
  display: none;

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
      background-color: ${({ theme }) => theme.colors.secondary};
      transition: transform ${({ theme }) => theme.transitions.default},
        opacity ${({ theme }) => theme.transitions.default};
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
