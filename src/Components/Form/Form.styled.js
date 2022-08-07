import styled from "styled-components";

export const FormWrapper = styled.div`
  padding: 0 24px;

  @media screen and (min-width: 1440px) {
    padding: 0;

    position: absolute;

    top: 274px;
    right: 227px;

    width: 381px;
  }
`;

export const StyledForm = styled.form`
  display: flex;

  flex-direction: column;
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

  @media screen and (min-width: 1440px) {
    margin-bottom: 26px;
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

  @media screen and (min-width: 1440px) {
    margin-right: 20px;
  }

  &:last-child {
    margin-right: 0;
  }

  div {
    display: flex;
    flex-direction: row;
    ${StyledInput} {
      width: 72px;

      @media screen and (min-width: 1440px) {
        width: 80px;
      }

      &:first-child {
        margin-right: 8px;
        @media screen and (min-width: 1440px) {
          margin-right: 10px;
        }
      }
    }
  }

  ${StyledInput} {
    width: 164px;
    @media screen and (min-width: 1440px) {
      width: 191px;
    }
  }
`;

export const StyledFormButton = styled.button`
  margin: 0 auto;

  width: 100%;

  padding: 15px 130px;

  border: none;

  background: #21092f;
  border-radius: 8px;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  /* White */

  color: #ffffff;

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
  }
`;
