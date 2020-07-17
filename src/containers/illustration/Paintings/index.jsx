import * as React from "react";

import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

import PageContainer from "../../../components/Page";
import Slideshow from "../../../components/Slideshow";
import Title from "../../../components/Title";
import Back from "../../../components/Back";

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

function Paintings({ lang, mobileMenuStatus, setMobileMenuStatus }) {
  return (
    <PageContainer
      lang={lang}
      mobileMenuStatus={mobileMenuStatus}
      setMobileMenuStatus={setMobileMenuStatus}
    >
      <Title>
        <Back>
          <Link to="/illustration">
            <span>{"<"} </span>
            {lang === "es" && "volver a ilustración"}
            {lang === "en" && "back to illustration"}
          </Link>
        </Back>
        <h1>
          {lang === "es" && "PINTURA"}
          {lang === "en" && "Paintings"}
        </h1>
      </Title>
      <SRLWrapper>
        <Slideshow>
          <img
            src={fish}
            alt={`${lang === "es" ? "pez" : ""} ${lang === "en" ? "fish" : ""}`}
          />
          <img
            src={whale}
            alt={`${lang === "es" ? "ballena" : ""} ${
              lang === "en" ? "whale" : ""
            }`}
          />
          <img
            src={redNose}
            alt={`${lang === "es" ? "nariz roja" : ""} ${
              lang === "en" ? "red nose" : ""
            }`}
          />
          <img
            src={funnyBunny}
            alt={`${lang === "es" ? "conejito felíz" : ""} ${
              lang === "en" ? "funnyBunny" : ""
            }`}
          />
          <img
            src={blueSkull}
            alt={`${lang === "es" ? "calabera azul" : ""} ${
              lang === "en" ? "blue skull" : ""
            }`}
          />
          <img
            src={mssBunny}
            alt={`${lang === "es" ? "señorita conejita" : ""} ${
              lang === "en" ? "miss bunny" : ""
            }`}
          />
          <img
            src={happyCactus}
            alt={`${lang === "es" ? "cactus felíz" : ""} ${
              lang === "en" ? "happy cactus" : ""
            }`}
          />
          <img
            src={cactusaurus}
            alt={`${lang === "es" ? "cactusauro" : ""} ${
              lang === "en" ? "cactusaurus" : ""
            }`}
          />
          <img
            src={fox}
            alt={`${lang === "es" ? "zorro" : ""} ${
              lang === "en" ? "fox" : ""
            }`}
          />
          <img
            src={holeCactus}
            alt={`${lang === "es" ? "cactus agujero" : ""} ${
              lang === "en" ? "hole cactus" : ""
            }`}
          />
          <img
            src={crownedSkull}
            alt={`${lang === "es" ? "calabera coronada" : ""} ${
              lang === "en" ? "crowned skull" : ""
            }`}
          />
          <img
            src={spaceMonkey}
            alt={`${lang === "es" ? "mono del espacio" : ""} ${
              lang === "en" ? "space monkey" : ""
            }`}
          />
          <img
            src={jellyfish}
            alt={`${lang === "es" ? "medusa" : ""} ${
              lang === "en" ? "jellyfish" : ""
            }`}
          />
          <img
            src={ragDoll}
            alt={`${lang === "es" ? "muñeca de trapo" : ""} ${
              lang === "en" ? "rag doll" : ""
            }`}
          />
          <img
            src={littleBird}
            alt={`${lang === "es" ? "pajarito" : ""} ${
              lang === "en" ? "little bird" : ""
            }`}
          />
        </Slideshow>
      </SRLWrapper>
    </PageContainer>
  );
}
export default Paintings;
