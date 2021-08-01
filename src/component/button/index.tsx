import styled, { css } from "styled-components";

interface IButton {
  color: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
}

const Button = styled.button<IButton>(
  ({ color, disabled }) => css`
    background: ${color === "primary"
      ? "#00BCD4"
      : color === "secondary"
      ? "#D9534F"
      : "#5CB85C"};
    padding: 10px 20px;
    width: 10rem;
    
    border: none;
    color: white;
    font-size: 1.2rem;
    border-radius: 5px;
    &:hover {
      border: 1px solid black;
      outline: 1px dashed #fff;
      outline-offset: -5px;
    }
    @media (max-width: 1000px) {
      padding: 5px 5px;
      font-size: 1rem;
      width: 5rem;
    }
    ${disabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
    `}
  `
);

export default Button;
