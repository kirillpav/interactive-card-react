import React from "react";
import {
  BackCard,
  CreditCardDate,
  CreditCardName,
  CreditCardNum,
  FrontCard,
  HeaderWrap,
} from "./Header.styled";

import cardLogo from "../../images/card-logo.svg";

const Header = (props) => {
  return (
    <HeaderWrap>
      <BackCard>
        <p>000</p>
      </BackCard>
      <FrontCard>
        <img src={cardLogo} alt="Card Logo" />
        <CreditCardNum>0000 0000 0000 0000</CreditCardNum>
        <CreditCardName>Jane Appleseed</CreditCardName>
        <CreditCardDate>00/00</CreditCardDate>
      </FrontCard>
    </HeaderWrap>
  );
};

export default Header;
