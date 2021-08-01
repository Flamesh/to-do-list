import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 90%;
  padding: 0px 10px;
  font-size: 1rem;
  border: 2px solid;
  height: 3.2rem;
`;

const Container = styled.label`
  text-align: left;
`;

interface IDatePicker {
  value?: string;
  onChange?: (e: string) => void;
  name?: string;
  id?: string;
  label?: string;
}
const DatePicker: React.FC<IDatePicker> = (props) => {
  const { value, onChange, name, id, label } = props;
  const handleChange = (e: any) => {
    
    onChange && onChange(e.target.value);
  };
  return (
    <Container>
      <div style={{ fontWeight: "bold" }}>{label}</div>
      <Input
        id={id}
        type="date"
        name={name}
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
};

export default DatePicker;
