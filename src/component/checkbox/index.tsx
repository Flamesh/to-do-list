import React from "react";
import styled, { keyframes } from "styled-components";

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const Container = styled.label`
  position: relative;
  display: inline-block;
  margin: 0.6em 1em;
`;
const Label = styled.span `
  font-size: 1.2rem;
  margin-left: 5px;
`
const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const Indicator = styled.div`
  width: 1.2em;
  height: 1.2em;
  background: #e6e6e6;
  position: absolute;
  top: 0.2em;
  left: -1.6em;
  border: 1px solid #757575;
  border-radius: 0.2em;

  ${Input}:not(:disabled):checked & {
    background: #d1d1d1;
  }

  ${Container}:hover & {
    background: #ccc;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0.1em;
    left: 0.35em;
    width: 35%;
    height: 70%;
    border: solid #263238;
    border-width: 0 0.2em 0.2em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &::disabled {
    cursor: not-allowed;
  }
`;

interface ICheckBox {
  value?: string;
  checked?: boolean;
  onChange?: () => void;
  name?: string;
  id?: string;
  label?: string;
  disabled?: boolean;
}
const Checkbox: React.FC<ICheckBox> = (props) => {
  const { value, checked, onChange, name, id, label, disabled } = props;
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <Indicator />
    </Container>
  );
};

export default Checkbox;
