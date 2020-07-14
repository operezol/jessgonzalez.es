import * as React from "react";

import { SRLWrapper } from "simple-react-lightbox";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

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

function Paintings({ lang }) {
  return (
    <>
      <Header lang={lang} />

      <h1>Paintings</h1>
      <SRLWrapper>
        <img src={fish} alt="fish" />
        <img src={happyCactus} alt="happy cactus" />
        <img src={spaceMonkey} alt="space monkey" />
        <img src={cactusaurus} alt="cactusaurus" />
        <img src={whale} alt="whale" />
        <img src={jellyfish} alt="jellyfish" />
        <img src={redNose} alt="red nose" />
        <img src={ragDoll} alt="rag doll" />
        <img src={littleBird} alt="little bird" />
        <img src={mssBunny} alt="mss-bunny" />
        <img src={fox} alt="fox" />
        <img src={funnyBunny} alt="funnyBunny" />
        <img src={holeCactus} alt="hole cactus" />
        <img src={blueSkull} alt="blue skull" />
        <img src={crownedSkull} alt="crowned skull" />
      </SRLWrapper>
      <Footer />
    </>
  );
}
export default Paintings;
