import React from "react";
import { Label } from "components/Atoms/Label/Label";
import { Input } from "components/Atoms/Input/Input";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${Label} {
    margin: 10px 0;
  }
`;

const FormField = ({ onChange, value, label, name, id, type = "text" }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        data-testid={label}
      />
    </Wrapper>
  );
};

export default FormField;
