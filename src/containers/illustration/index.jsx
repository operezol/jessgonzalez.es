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
  a{
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:1rem;
    span{
      text-align:center;
    }
  }
`;

function Illustration({ lang }) {
  return (
    <PageContainer lang={lang}>
      <StyledTitle>
        {lang === "es" && "ILUSTRACIÓN"}
        {lang === "en" && "ILLUSTRATION"}
      </StyledTitle>
      <FlexBox>
          <Link to="/illustration/drawings">
            <img src={drawings} width="100" alt="Drawings" />
            <span>
              {lang === "es" && "DIBUJO"}
              {lang === "en" && "DRAWINGS"}
            </span>
          </Link>
          <Link to="/illustration/paintings">
            <img src={paintings} width="100" alt="Paintings" />
            <span>
              {lang === "es" && "PINTURA"}
              {lang === "en" && "PAINTINGS"}
            </span>
          </Link>
          <Link to="/illustration/digital">
            <img src={digital} width="100" alt="Digital" />
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
