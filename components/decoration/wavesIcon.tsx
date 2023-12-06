import styled from "styled-components";
import { Waves } from "./waves";
import { Icon } from "@iconify/react";
import { theme } from "@/styles/theme";
import { icons } from "content/icons";

type Icon = "arrow-right" | "pen";

const WaveIcon = styled.div<{ i: number }>`
  position: absolute;
  color: ${theme.primary};
  font-size: 10rem;
  top: 4rem;
  left: 4rem;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const WavesIcon = ({ count = 1, icon = icons.blog }) => {
  return (
    <Wrapper style={{ height: "20rem" }}>
      <Waves />
      {Array.from({ length: count })
        .map((_, i) => {
          console.log({ i });
          return i;
        })
        .map((i) => (
          <WaveIcon key={i} i={i + 1}>
            <Icon icon={icon} />
          </WaveIcon>
        ))}
    </Wrapper>
  );
};
