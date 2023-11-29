import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.div`
  padding: 1rem;
  background-color: #000;
  display: flex;
  align-items: center;
  width: max-content;
  border-radius: 4px;
`;

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick: () => void;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  return <ButtonStyled {...props} />;
};
