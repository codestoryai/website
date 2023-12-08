import styled from "styled-components";
import { Waves } from "./waves";
import { Icon } from "@iconify/react";
import { theme } from "@/styles/theme";
import { icons } from "content/icons";

type Icon = "arrow-right" | "pen";

const WaveIcon = styled.div<{ i: number }>`
  position: absolute;
  color: ${theme.card};
  svg {
    filter: drop-shadow(3px 3px 0px ${theme.primary});
  }
  font-size: 10rem;
  bottom: 0;
  right: 0;
  height: 11rem;
  width: 11rem;
`;

const Wrapper = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
`;

export const WavesIcon = ({ count = 1, icon = icons.blog }) => {
  return (
    <Wrapper>
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
