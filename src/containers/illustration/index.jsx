import * as React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import PageContainer from "../../components/Page";

import drawings from "../../resources/illustration/drawings/drawings.svg";
import digital from "../../resources/illustration/digital/digital.svg";
import paintings from "../../resources/illustration/paintings/paintings.svg";

const StyledTitle = styled.h1`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

const FlexBox = styled.main`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  img{
    height:6rem;
  }
  a{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    margin:1rem;
    span{
      text-align:center;
    }
  }
`;

function Illustration({ lang, mobileMenuStatus, setMobileMenuStatus }) {
  return (
    <PageContainer lang={lang} mobileMenuStatus={mobileMenuStatus} setMobileMenuStatus={setMobileMenuStatus}>
      <StyledTitle>
        {lang === "es" && "ILUSTRACIÓN"}
        {lang === "en" && "ILLUSTRATION"}
      </StyledTitle>
      <FlexBox>
          <Link to="/illustration/drawings">
            <img src={drawings}  alt="Drawings" />
            <span>
              {lang === "es" && "DIBUJO"}
              {lang === "en" && "DRAWINGS"}
            </span>
          </Link>
          <Link to="/illustration/paintings">
            <img src={paintings}  alt="Paintings" />
            <span>
              {lang === "es" && "PINTURA"}
              {lang === "en" && "PAINTINGS"}
            </span>
          </Link>
          <Link to="/illustration/digital">
            <img src={digital}  alt="Digital" />
            <span>
              {lang === "es" && "DIGITAL"}
              {lang === "en" && "DIGITAL"}
            </span>
          </Link>
      </FlexBox>
    </PageContainer>
  );
}
export default Illustration;
