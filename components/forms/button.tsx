import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Button = styled.div`
  font-family: ${theme.font.heading};
  padding: 0.5rem 1rem;
  background-color: ${theme.primary};
  color: ${theme.primaryOver};
  display: flex;
  align-items: center;
  width: max-content;
  border-radius: ${theme.borderRadius};
  font-weight: bold;
`;

export const LinkButton = styled.a`
  font-family: ${theme.font.heading};
  padding: 0.5rem 1rem;
  background-color: ${theme.primary};
  color: ${theme.primaryOver};
  display: flex;
  align-items: center;
  width: max-content;
  border-radius: ${theme.borderRadius};
  text-decoration: none;
  font-weight: bold;
`;
