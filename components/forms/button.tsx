import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Button = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${theme.primary};
  color: ${theme.primaryOver};
  display: flex;
  align-items: center;
  width: max-content;
  border-radius: ${theme.borderRadius};
`;

export const LinkButton = styled.a`
  padding: 0.5rem 1rem;
  background-color: ${theme.primary};
  color: ${theme.primaryOver};
  display: flex;
  align-items: center;
  width: max-content;
  border-radius: ${theme.borderRadius};
  text-decoration: none;
`;

