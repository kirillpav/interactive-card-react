import React from "react";
import {
  BottomFormWrapper,
  FormItem,
  FormWrapper,
  StyledForm,
  StyledFormButton,
  StyledInput,
  StyledLabel,
} from "./Form.styled";

const Form = () => {
  return (
    <FormWrapper>
      <StyledForm>
        <StyledLabel for="name">Cardholder Name</StyledLabel>
        <StyledInput type="text" placeholder="e.g. Jane Appleseed" />
        <StyledLabel for="card number">Card Number</StyledLabel>
        <StyledInput type="number" placeholder="e.g. 1234 5678 9123 0000" />
        <BottomFormWrapper>
          <FormItem>
            <StyledLabel for="expire date">Exp. Date (MM/YY)</StyledLabel>
            <div>
              <StyledInput type="number" placeholder="MM" maxLength="2" />
              <StyledInput type="number" placeholder="YY" maxLength="2" />
            </div>
          </FormItem>
          <FormItem>
            <StyledLabel for="CVC">CVC</StyledLabel>
            <StyledInput type="number" placeholder="e.g 123" maxLength="3" />
          </FormItem>
        </BottomFormWrapper>
        <StyledFormButton type="submit">Confirm</StyledFormButton>
      </StyledForm>
    </FormWrapper>
  );
};

export default Form;
