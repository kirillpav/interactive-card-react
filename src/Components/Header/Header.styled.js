import styled from "styled-components";

import bgImageDesktop from "../../images/bg-main-desktop.png";
import bgImageMobile from "../../images/bg-main-mobile.png";
import backImage from "../../images/bg-card-back.png";
import frontImage from "../../images/bg-card-front.png";

export const HeaderWrap = styled.div`
  position: relative;

  padding: 0 16px;

  margin-bottom: 91px;

  height: 240px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    margin-right: 349px;

    height: 100vh;
    width: 483px;
  }

  &:after {
    position: absolute;

    top: 0;
    left: 0;

    content: "";
    display: block;
    background-image: url(${bgImageMobile});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    width: 100%;
    height: 240px;

    @media screen and (min-width: 1440px) {
      background-image: url(${bgImageDesktop});

      height: 100vh;
    }
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

  @media screen and (min-width: 1440px) {
    top: unset;
    right: unset;

    bottom: 186px;
    left: 258px;

    width: 447px;
    height: 245px;
  }

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

    @media screen and (min-width: 1440px) {
      top: 115px;
      right: 57px;

      font-size: 14px;
      letter-spacing: 2px;
    }
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

  @media screen and (min-width: 1440px) {
    top: 186px;
    left: 164px;

    width: 447px;
    height: 245px;
  }

  img {
    position: absolute;
    top: 17px;
    left: 19px;

    width: 54px;
    height: 30px;

    @media screen and (min-width: 1440px) {
      top: 28px;
      left: 32px;

      width: 84px;
      height: 47px;
    }
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

  @media screen and (min-width: 1440px) {
    top: unset;
    left: 32px;
    bottom: 70px;

    font-size: 28px;
    line-height: 36px;

    letter-spacing: 3.4px;
  }
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

  @media screen and (min-width: 1440px) {
    bottom: 26.5px;
    left: 32px;

    font-size: 14px;
    line-height: 18px;
    letter-spacing: 2px;
  }
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

  @media screen and (min-width: 1440px) {
    bottom: 26.5px;
    right: 32px;

    font-size: 14px;
    line-height: 18px;
    letter-spacing: 2px;
  }
`;
