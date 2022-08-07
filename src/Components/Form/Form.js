import React from "react";
import {
  BottomFormWrapper,
  FormItem,
  FormWrapper,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./Form.styled";

const Form = () => {
  return (
    <FormWrapper>
      <StyledForm>
        <StyledLabel for="name">Cardholder Name</StyledLabel>
        <StyledInput type="text" placeholder="e.g. Jane Appleseed" />
        <StyledLabel for="name">Cardholder Name</StyledLabel>
        <StyledInput type="number" placeholder="e.g. 1234 5678 9123 0000" />
        <BottomFormWrapper>
          <FormItem>
            <StyledLabel for="expire date">Exp. Date (MM/YY)</StyledLabel>
          </FormItem>
          <FormItem>
            <StyledLabel for="CVC">CVC</StyledLabel>
          </FormItem>
        </BottomFormWrapper>
      </StyledForm>
    </FormWrapper>
  );
};

export default Form;
