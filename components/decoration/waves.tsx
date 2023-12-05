import { theme } from "@/styles/theme";
import { motion } from "framer-motion";
import styled from "styled-components";

const Wave = styled.div<{ i: number }>`
  position: absolute;
  width: calc(2rem * ${({ i }) => i});
  height: calc(2rem * ${({ i }) => i});
  opacity: calc(1 - 0.1 * ${({ i }) => i});
  border: 1px dashed ${theme.primary};
  z-index: 0;
`;
export const Waves = ({ count = 10 }) => {
  return (
    <div>
      {Array.from({ length: count })
        .map((_, i) => {
          console.log({ i });
          return i;
        })
        .map((i) => (
          <Wave key={i} i={i + 1}></Wave>
        ))}
    </div>
  );
};
