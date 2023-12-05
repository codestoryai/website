import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "@/styles/theme";

export const HeaderStyled = styled(motion.header)`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 1rem;
  left: 1rem;
  width: calc(100% - 2rem);
  z-index: 5000;
  padding: 1rem 2rem;
  background: ${theme.card};

  nav {
    display: flex;
    gap: 1rem;
  }

  nav a {
    text-decoration: none;
  }
`;
