import { FeatureCard, FeatureCardDetails } from "./Card";

import NLPSearch from "../../public/images/home/nlp-search.png";
import Agent from "../../public/images/home/agent.png";
import Omnibar from "../../public/images/home/omnibar.png";
import GitDiff from "../../public/images/home/git-diff.png";
import SlashCommands from "../../public/images/home/slash-commands.png";
import DebugPrompt from "../../public/images/home/debug.png";
import ExplainPrompt from "../../public/images/home/explain-prompt.png";
import Migration from "../../public/images/home/migrate.png";
import VSCode from "../../public/assets/logos/vscode.svg";
import Aide from "../../public/images/aide-white.svg";
import LogoTS from "../../public/images/logo-ts.svg";
import LogoJS from "../../public/images/logo-js.svg";
import LogoPython from "../../public/images/logo-python.svg";
import LogoGo from "../../public/images/logo-go.svg";
import styled from "styled-components";
import { theme } from "@/styles/theme";

const Features: FeatureCardDetails[] = [
  {
    title: "Feature 1",
    description: "Ask general questions, or use slash commands and `@` context providers for powerful workflows.",
    image: NLPSearch.src,
  },
  {
    title: "Feature 2",
    description: "Feature 1 description",
    image: Omnibar.src,
  },
  {
    title: "Feature 3",
    description: "Feature 1 description",
    image: DebugPrompt.src,
  },
  {
    title: "Feature 4",
    description: "A long description for feature 4 that should wrap around",
    image: ExplainPrompt.src,
  },
];

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;
`;

export const FeatureList = () => {
  return (
    <ListWrapper>
      {Features.map((card, i) => (
        <FeatureCard key={i} card={card} />
      ))}
    </ListWrapper>
  );
};
