import React from "react";
import styled from "styled-components";
import { DownloadButtons } from "../../components/download/download";

const StyledRow = styled.div`
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
`;

const StyledPortion = styled.div`
  flex: ${(props) => props.desktopSpan};
  margin-bottom: ${(props) => props.marginBottom};
`;

const StyledHeading = styled.h2`
  color: ${(props) => props.textColour};
  font-weight: ${(props) => props.weight};
  opacity: ${(props) => props.opacity};
  margin-bottom: ${(props) => props.marginBottom};
`;

const StyledSubHeading = styled.h5`
  color: ${(props) => props.textColour};
  font-weight: ${(props) => props.weight};
  opacity: ${(props) => props.opacity};
  margin-bottom: ${(props) => props.marginBottom};
`;

interface HeroProps {
  matchingRelease: string;
  latestRelease: string;
  os: string;
}

const Hero: React.FC<HeroProps> = ({ matchingRelease, latestRelease, os }) => {
  return (
    <StyledRow>
      <StyledHeading
        as="h2"
        className="headline"
        textColour="white"
        title="AI + IDE = Aide = help / assist / assitant. Clever, huh?"
      >
        Introducing Aide.
      </StyledHeading>
      <StyledHeading as="h2" className="headline" textColour="white">
        The AI-powered mod of VSCode.
      </StyledHeading>

      <StyledPortion desktopSpan="half">
        <StyledSubHeading weight="400" textColour="white" opacity="80" marginBottom="micro">
          <span>Instruct AI agents to build your software.</span>
        </StyledSubHeading>

        <StyledSubHeading weight="400" textColour="white" opacity="80" marginBottom="micro">
          Editing across files, searching, debugging, refactoring—our agent can do everything you do within the IDE. And
          Aide is built on VSCode, so you can migrate seamlessly and continue using your favourite extensions.
        </StyledSubHeading>

        <DownloadButtons matchingRelease={matchingRelease} latestRelease={latestRelease} os={os} />
      </StyledPortion>
    </StyledRow>
  );
};

export default Hero;
