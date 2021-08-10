import React, { useState, useContext } from "react";
import { StickersContext } from "components/providers/StickersProvider";
import FormField from "components/Molecules/FormField/FormField";
import { Wrapper, StyledH2, ErrorP, StyledForm } from "./AddSticker.styles";

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
      formValues.title === "" ||
      formValues.category === "" ||
      formValues.description === "" ||
      formValues.data === ""
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
