import { theme } from "@/styles/theme";
import styled from "styled-components";

export interface FeatureCardDetails {
  title: string;
  description: string;
  image: string;
  alt?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: ${theme.card};
  width: 100%;

  img {
    object-fit: contain;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  max-width: 40ch;
`;

export const FeatureCard = ({ card }: { card: FeatureCardDetails }) => {
  const { title, description, image, alt } = card;
  return (
    <Wrapper>
      <img width={600} height={600} src={image} alt={alt ?? title} />
      <Content>
        <h3>{title}</h3>
        <p>{description}</p>
      </Content>
    </Wrapper>
  );
};

// Founders@codestory.ai
