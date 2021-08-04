import React, { useState, useContext } from "react";
import FormField from "components/Molecules/FormField/FormField";
import styled from "styled-components";
import { StickersContext } from "components/providers/StickersProvider";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const StyledH2 = styled.h2`
  top: 75px;
  left: 30px;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: 20px;
`;

const ErrorP = styled.p`
  color: ${({ theme }) => theme.colors.error};
  position: absolute;
  top: 0;
`;

const StyledForm = styled.form`
  padding: 30px 50px;
  position: relative;

  button {
    margin-top: 20px;
    background-color: ${({ theme }) => theme.colors.grey};
    padding: 10px 40px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const initialFormValues = {
  title: "",
  category: "",
  description: "",
  data: "",
};

const AddSticker = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { handleAddSticker } = useContext(StickersContext);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (
      formValues.title == "" ||
      formValues.category == "" ||
      formValues.description == "" ||
      formValues.data == ""
    ) {
      setError("Fill in all required fields");
      return;
    }
    setError("");
    handleAddSticker(formValues);
    setFormValues(initialFormValues);
    console.log(initialFormValues);
  };

  return (
    <Wrapper>
      <StyledH2>Add new sticker!</StyledH2>
      <StyledForm onSubmit={handleSubmitUser}>
        <FormField
          label="Title"
          id="title"
          name="title"
          value={formValues.title}
          onChange={handleInputChange}
        ></FormField>
        <FormField
          label="Category"
          id="category"
          name="category"
          value={formValues.category}
          onChange={handleInputChange}
        ></FormField>
        <FormField
          label="Description"
          id="description"
          name="description"
          value={formValues.description}
          onChange={handleInputChange}
        ></FormField>
        <FormField
          label="Data"
          id="data"
          name="data"
          value={formValues.data}
          onChange={handleInputChange}
        ></FormField>
        {error ? <ErrorP> {error} </ErrorP> : null}
        <button type="submit">add</button>
      </StyledForm>
    </Wrapper>
  );
};

export default AddSticker;
