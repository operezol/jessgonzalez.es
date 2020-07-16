import * as React from "react";
import styled from "@emotion/styled";

import { SRLWrapper } from "simple-react-lightbox";

import PageContainer from "../../../components/Page";

import fish from "../../../resources/illustration/paintings/1-fish.jpg";
import happyCactus from "../../../resources/illustration/paintings/2-happy-cactus.jpg";
import spaceMonkey from "../../../resources/illustration/paintings/3-space-monkey.jpg";
import cactusaurus from "../../../resources/illustration/paintings/4-cactusaurus.jpg";
import whale from "../../../resources/illustration/paintings/5-whale.jpg";
import jellyfish from "../../../resources/illustration/paintings/6-jellyfish.jpg";
import redNose from "../../../resources/illustration/paintings/7-red-nose.jpg";
import ragDoll from "../../../resources/illustration/paintings/8-rag-doll.jpg";
import littleBird from "../../../resources/illustration/paintings/9-little-bird.jpg";
import mssBunny from "../../../resources/illustration/paintings/10-mss-bunny.jpg";
import fox from "../../../resources/illustration/paintings/11-fox.jpg";
import funnyBunny from "../../../resources/illustration/paintings/12-funny-bunny.jpg";
import holeCactus from "../../../resources/illustration/paintings/13-hole-cactus.jpg";
import blueSkull from "../../../resources/illustration/paintings/14-blue-skull.jpg";
import crownedSkull from "../../../resources/illustration/paintings/15-crowned-skull.jpg";

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

function Paintings({ lang, mobileMenuStatus, setMobileMenuStatus }) {
  return (
    <PageContainer
      lang={lang}
      mobileMenuStatus={mobileMenuStatus}
      setMobileMenuStatus={setMobileMenuStatus}
    >
      <h1>Paintings</h1>
      <SRLWrapper>
        <MainContent>
          <img src={fish} alt="fish" />
          <img src={whale} alt="whale" />
          <img src={redNose} alt="red nose" />
          <img src={funnyBunny} alt="funnyBunny" />
          <img src={blueSkull} alt="blue skull" />
          <img src={mssBunny} alt="mss-bunny" />
          <img src={happyCactus} alt="happy cactus" />
          <img src={cactusaurus} alt="cactusaurus" />
          <img src={fox} alt="fox" />
          <img src={holeCactus} alt="hole cactus" />
          <img src={crownedSkull} alt="crowned skull" />
          <img src={spaceMonkey} alt="space monkey" />
          <img src={jellyfish} alt="jellyfish" />
          <img src={ragDoll} alt="rag doll" />
          <img src={littleBird} alt="little bird" />
        </MainContent>
      </SRLWrapper>
    </PageContainer>
  );
}
export default Paintings;
