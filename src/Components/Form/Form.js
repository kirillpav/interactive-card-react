import React, { useState } from "react";
import {
  BottomFormWrapper,
  FormItem,
  FormWrapper,
  StyledForm,
  StyledFormButton,
  StyledInput,
  StyledLabel,
} from "./Form.styled";

// child component
const Form = () => {
  const initialValues = {
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(formValues);
  };

  const validate = (values) => {};
  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel for="name">Cardholder Name</StyledLabel>
        <StyledInput
          type="text"
          placeholder="e.g. Jane Appleseed"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
        <StyledLabel for="card number">Card Number</StyledLabel>
        <StyledInput
          type="number"
          placeholder="e.g. 1234 5678 9123 0000"
          name="cardNumber"
          value={formValues.cardNumber}
          onChange={handleChange}
        />
        <BottomFormWrapper>
          <FormItem>
            <StyledLabel for="expire date">Exp. Date (MM/YY)</StyledLabel>
            <div>
              <StyledInput
                type="number"
                placeholder="MM"
                maxLength="2"
                name="month"
                value={formValues.month}
                onChange={handleChange}
              />
              <StyledInput
                type="number"
                placeholder="YY"
                maxLength="2"
                name="year"
                value={formValues.year}
                onChange={handleChange}
              />
            </div>
          </FormItem>
          <FormItem>
            <StyledLabel for="CVC">CVC</StyledLabel>
            <StyledInput
              type="number"
              placeholder="e.g 123"
              maxLength="3"
              name="cvc"
              value={formValues.cvc}
              onChange={handleChange}
            />
          </FormItem>
        </BottomFormWrapper>
        <StyledFormButton type="submit">Confirm</StyledFormButton>
      </StyledForm>
    </FormWrapper>
  );
};

export default Form;
