import styled, { keyframes } from "styled-components";
import { theme } from "@/styles/theme";

export const HeaderStyled = styled.header`
  position: sticky;
  display: flex;
  justify-content: space-between;
  top: 0;
  width: 70ch;
  max-width: 100%;
  overflow-x: auto;
  margin: 0 auto;
  z-index: 5000;
  background: ${theme.background};
  border: 1px solid ${theme.borderTight};
  padding: 0;
  font-family: ${theme.font.brand};

  nav {
    display: flex;
    height: max-content;
  }

  nav a {
  }
`;

const flashActive = keyframes`
  0% {
    background-color: ${theme.card};
  }
  25% {
    background-color: ${theme.primary};
    opacity: 0.2;
  }
  50% {
    background-color: ${theme.fadeText};
    opacity: 0;
  }
  75% {
    background-color: ${theme.primary};
    opacity: 0.2;
  }
  100% {
    background-color: ${theme.card};
  }
`;

export const HeaderTab = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem 0.5rem 1rem;
  max-width: max-content;
  text-decoration: none;
  gap: 0.5rem;
  background: ${theme.background};
  border-top: 2px solid transparent;
  border-left: 1px solid ${theme.borderTight};
  border-right: 1px solid ${theme.borderTight};
  cursor: pointer;
  transition: all 0.25s ease;
  svg {
    color: ${theme.headingColored};
  }
  &:hover {
    background: rgba(${theme.fadeTextRgb}, 0.1);
    border-top: 2px solid ${theme.fadeText};
  }
  &.active {
    animation: ${flashActive} 0.25s ease;
    background: ${theme.card};
    border-top: 2px solid ${theme.primary};
  }
  &.active svg {
    color: ${theme.primary};
  }
`;
