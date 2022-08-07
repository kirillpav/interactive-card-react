import styled from "styled-components";

import bgImage from "../../images/bg-main-mobile.png";
import backImage from "../../images/bg-card-back.png";
import frontImage from "../../images/bg-card-front.png";

export const HeaderWrap = styled.div`
  position: relative;

  padding: 0 16px;

  margin-bottom: 91px;

  height: 240px;

  &:after {
    position: absolute;

    top: 0;
    left: 0;

    content: "";
    display: block;
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    width: 100%;
    height: 240px;
  }
`;

export const BackCard = styled.div`
  position: absolute;
  top: 32px;
  right: 16px;

  width: 286px;
  height: 157px;

  background-image: url(${backImage});
  background-repeat: no-repeat;
  background-size: cover;

  z-index: 1;

  p {
    position: absolute;
    top: 72px;
    right: 37px;

    font-style: normal;
    font-weight: 500;
    font-size: 9px;
    line-height: 11px;
    text-align: right;
    letter-spacing: 1.28571px;
    text-transform: uppercase;

    /* White */

    color: #ffffff;
  }
`;

// Front Credit Card Styling

export const FrontCard = styled.div`
  position: absolute;
  top: 126px;
  left: 16px;

  width: 286px;
  height: 157px;

  background-image: url(${frontImage});
  background-repeat: no-repeat;
  background-size: cover;

  z-index: 2;

  img {
    position: absolute;
    top: 17px;
    left: 19px;

    width: 54px;
    height: 30px;
  }
`;

export const CreditCardNum = styled.p`
  position: absolute;
  top: 84px;
  left: 19px;

  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  letter-spacing: 2.2px;

  /* White */

  color: #ffffff;
`;

export const CreditCardName = styled.p`
  position: absolute;
  bottom: 20px;
  left: 19px;

  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;

  /* White */

  color: #ffffff;
`;

export const CreditCardDate = styled.p`
  position: absolute;
  bottom: 20px;
  right: 20px;

  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  text-align: right;
  letter-spacing: 1.28571px;
  text-transform: uppercase;

  /* White */

  color: #ffffff;
`;
