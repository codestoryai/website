import React from "react";
import styled from "styled-components";
import { DownloadButtons } from "../../components/download/download";
import { intro } from "content/landing";
import { theme } from "@/styles/theme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  height: 100dvh;
  width: 100%;
  padding: 1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  justify-content: center;
  max-width: 60ch;
  padding: ${theme.font.size.lg};
  border: 1px solid ${theme.borderTight};
  background-color: ${theme.card};
`;

const Heading = styled.h2``;

const SubHeading = styled.h2``;

interface HeroProps {
  matchingRelease: string;
  latestRelease: string;
  os: string;
}

const Hero: React.FC<HeroProps> = ({ matchingRelease, latestRelease, os }) => {
  return (
    <Wrapper>
      <Content>
        <Heading className="headline">Introducing Aide.</Heading>
        <SubHeading>The AI-powered mod of VSCode.</SubHeading>

        <SubHeading>
          <span>Instruct AI agents to build your software.</span>
        </SubHeading>

        <p>{intro.para}</p>

        <DownloadButtons matchingRelease={matchingRelease} latestRelease={latestRelease} os={os} />
      </Content>
    </Wrapper>
  );
};

export default Hero;
