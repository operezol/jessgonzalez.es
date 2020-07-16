import * as React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import PageContainer from "../../components/Page";

import ekotarriko from "../../resources/graphicDesign/ekotarriko-btn.jpg";
import talita from "../../resources/graphicDesign/talita-btn.jpg";
import fisioesthetic from "../../resources/graphicDesign/fisioesthetic-btn.jpg";
import logo from "../../resources/graphicDesign/logos-btn.jpg";

const StyledTitle = styled.h1`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;
const SeeMore = styled.div`
    overflow: hidden;
    position: relative;yarn 
  & > span {
    text-align: right;
    display: block;
    width: 100%;
    padding: 0.5rem;
    position:absolute;
    bottom:0;
    & > span {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 768px) {
    & > span {
      transition: all 0.5s ease-in-out;
      position: absolute;
      bottom: -100%;
      line-height: 2rem;
      background-color: rgba(127, 127, 127, 0.5);
      padding: 0 1rem;
    }
    &:hover {
      & > span {
        bottom: 0;
      }
    }
  }
`;

const MainContent = styled.div`
  a {
    display:block;
    padding:1rem;
  }
  @media (min-width: 768px) {
    column-count: 2;
    column-gap:0;
  }
`;

function GraphicDesign({ lang, mobileMenuStatus, setMobileMenuStatus }) {
  const renderLinkContent = (imageObj) => {
    return (
      <SeeMore>
        <img src={imageObj} alt="" />
        <span>
          {lang === "es" && "VER MÁS"}
          {lang === "en" && "SEE MORE"}
          <span> {">"}</span>
        </span>
      </SeeMore>
    );
  };

  return (
    <PageContainer
      lang={lang}
      mobileMenuStatus={mobileMenuStatus}
      setMobileMenuStatus={setMobileMenuStatus}
    >
      <StyledTitle>
        {lang === "es" && "diseño gráfico"}
        {lang === "en" && "graphic design"}
      </StyledTitle>
      <MainContent>
        <Link to="/graphic-design/ekotarriko">
          {renderLinkContent(ekotarriko)}
        </Link>
        <Link to="/graphic-design/talita">{renderLinkContent(talita)}</Link>
        <Link to="/graphic-design/fisioesthetic">
          {renderLinkContent(fisioesthetic)}
        </Link>
        <Link to="/graphic-design/logos">{renderLinkContent(logo)}</Link>
      </MainContent>
    </PageContainer>
  );
}
export default GraphicDesign;
