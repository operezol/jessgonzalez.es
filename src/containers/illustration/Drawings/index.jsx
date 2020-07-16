import * as React from "react";
import styled from "@emotion/styled";

import { SRLWrapper } from "simple-react-lightbox";

import PageContainer from "../../../components/Page";

import fox from "../../../resources/illustration/drawings/1-fox.jpg";
import bird from "../../../resources/illustration/drawings/2-bird.jpg";
import snake from "../../../resources/illustration/drawings/3-snake.jpg";
import dinosaur from "../../../resources/illustration/drawings/4-dinosaur.jpg";
import selfPortrait from "../../../resources/illustration/drawings/5-self-portrait.jpg";
import person from "../../../resources/illustration/drawings/6-person.jpg";
import ghostBuster from "../../../resources/illustration/drawings/7-ghost-buster.jpg";
import plant from "../../../resources/illustration/drawings/8-plant.jpg";
import portraits from "../../../resources/illustration/drawings/9-portraits.jpg";
import dog from "../../../resources/illustration/drawings/10-dog.jpg";
import deepLove from "../../../resources/illustration/drawings/11-deep-love.jpg";
import catCrown from "../../../resources/illustration/drawings/12-cat-crown.jpg";

const MainContent = styled.div`
  padding:1rem 0 0 1rem;
  img {
    padding: 0 1rem 1rem 0;
    width: 100%;
  }
  @media (min-width: 768px) {
    column-count: 2;
    column-gap: 0;
  }
  @media (min-width: 1280px) {
    column-count: 3;
    column-gap: 0;
  }

`;

function Drawings({ lang, mobileMenuStatus, setMobileMenuStatus }) {
  return (
    <PageContainer
      lang={lang}
      mobileMenuStatus={mobileMenuStatus}
      setMobileMenuStatus={setMobileMenuStatus}
    >
      <h1>DRAWINGS</h1>
      <SRLWrapper>
        <MainContent>
          <img src={fox} alt="fox" />
          <img src={deepLove} alt="deepLove"/>

          <img src={snake} alt="snake" />
          <img src={dinosaur} alt="dinosaur" />
          <img src={bird} alt="bird" />

          <img src={person} alt="person" />
          <img src={ghostBuster} alt="ghostBuster" />
          <img src={plant} alt="plant" />

          <img src={dog} alt="dog" />
          <img src={selfPortrait} alt="selfPortrait" />

          <img src={portraits} alt="portraits" />
          <img src={catCrown} alt="catCrown" />
        </MainContent>
      </SRLWrapper>
    </PageContainer>
  );
}
export default Drawings;
