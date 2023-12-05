import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { theme } from "@/styles/theme";
import Link from "next/link";

export const HeaderStyled = styled(motion.header)`
  position: sticky;
  display: flex;
  justify-content: space-between;
  top: 0;
  width: 100%;
  z-index: 5000;
  background: ${theme.background};
  padding: 0 1rem;

  nav {
    display: flex;
    gap: 2px;
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
}`;

export const HeaderTab = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  max-width: max-content;
  text-decoration: none;
  background: ${theme.card};
  border-top: 2px solid transparent;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    background: rgba(${theme.fadeTextRgb}, 0.1);
    border-top: 2px solid ${theme.fadeText};
  }
  &.active {
    animation: ${flashActive} 0.25s ease;
    background: rgba(${theme.primaryRgb}, 0.1);
    border-top: 2px solid ${theme.primary};
  }
`;
