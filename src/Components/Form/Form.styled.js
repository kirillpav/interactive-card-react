import styled from "styled-components";

export const FormWrapper = styled.div`
  padding: 0 16px; ;
`;

export const StyledForm = styled.form`
  display: flex;

  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;

    div {
      display: flex;
      flex-direction: column;
      div {
        display: flex;
        flex-direction: row;
      }
    }
  }
`;

export const StyledLabel = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;

  /* Deep Violet */

  color: #21092f;
  margin-bottom: 9px;
`;

export const StyledInput = styled.input`
  margin-bottom: 18px;

  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 16px;

  background: #ffffff;
  /* Light Grey */

  border: 1px solid #dfdee0;
  border-radius: 8px;

  &:placeholder {
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    /* identical to box height */

    /* Deep Violet */

    color: #21092f;

    mix-blend-mode: normal;
    opacity: 0.25;
  }
`;

export const BottomFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 11px;

  &:last-child {
    margin-right: 0;
  }
`;
