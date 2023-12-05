import styled from "styled-components";
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

export const HeaderTab = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  max-width: max-content;
  text-decoration: none;
  background: ${theme.card};
  border-top: 2px solid transparent;
  cursor: pointer;
  &:hover {
    background: rgba(${theme.fadeTextRgb}, 0.1);
    border-top: 2px solid ${theme.fadeText};
  }
  &.active {
    background: rgba(${theme.primaryRgb}, 0.1);
    border-top: 2px solid ${theme.primary};
  }
`;
