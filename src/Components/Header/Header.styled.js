import styled from "styled-components";

import bgImage from "../../images/bg-main-mobile.png";
import backImage from "../../images/bg-card-back.png";

export const HeaderWrap = styled.div`
  position: relative;

  padding: 0 16px;

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

  z-index: 2;
`;
