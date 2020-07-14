import * as React from "react";

import { SRLWrapper } from "simple-react-lightbox";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

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

function Drawings({ lang }) {
  return (
    <>
      <Header lang={lang} />

      <h1>DRAWINGS</h1>
      <SRLWrapper>
        <img src={fox} alt="fox" />
        <img src={bird} alt="bird" />
        <img src={snake} alt="snake" />
        <img src={dinosaur} alt="dinosaur" />
        <img src={selfPortrait} alt="selfPortrait" />
        <img src={person} alt="person" />
        <img src={ghostBuster} alt="ghostBuster" />
        <img src={plant} alt="plant" />
        <img src={portraits} alt="portraits" />
        <img src={dog} alt="dog" />
        <img src={deepLove} alt="deepLove" />
        <img src={catCrown} alt="catCrown" />
      </SRLWrapper>
      <Footer />
    </>
  );
}
export default Drawings;
