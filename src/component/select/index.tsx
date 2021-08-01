import React from "react";
import styled from "styled-components";

const Container = styled.label`
  text-align: left;
`;

const Selected = styled.select`
  width: 98%;
  padding: 5px 10px;
  font-size: 1rem;
  border: 2px solid;
  height: 3.5rem;
`;

const Option = styled.option`
    height: 1rem;
    
`;
interface ISelect {
  value?: string;
  onChange?: (e: any) => void;
  label?: string;
  list?: { value: string }[];
}
const Select: React.FC<ISelect> = (props) => {
  const { value, onChange, label, list } = props;
  const handleSelect = (e: any) => {
    onChange && onChange(e.target.value);
  };
  return (
    <Container>
      <div style={{ fontWeight: "bold" }}>{label}</div>
      <Selected onChange={handleSelect} value={value}>
        {list?.map((item, index) => (
          <Option value={item.value} key={index}>
            {item.value}
          </Option>
        ))}
      </Selected>
    </Container>
  );
};

export default Select;
