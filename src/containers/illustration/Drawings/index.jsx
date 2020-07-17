import * as React from "react";

import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

import PageContainer from "../../../components/Page";
import Slideshow from "../../../components/Slideshow";
import Title from "../../../components/Title";
import Back from "../../../components/Back";

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

function Drawings({ lang, mobileMenuStatus, setMobileMenuStatus }) {
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
          {lang === "es" && "dibujo"}
          {lang === "en" && "drawings"}
        </h1>
      </Title>
      <SRLWrapper>
        <Slideshow>
          <img
            src={fox}
            alt={`${lang === "es" ? "zorro" : ''}${
              lang === "en" ? "fox" : ''
            }`}
          />
          <img
            src={deepLove}
            alt={`${lang === "es" ? "amor profundo" : ''}${
              lang === "en" ? "deep love" : ''
            }`}
          />
          <img
            src={snake}
            alt={`${lang === "es" ? "serpiente" : ''}${
              lang === "en" ? "snake" : ''
            }`}
          />
          <img
            src={dinosaur}
            alt={`${lang === "es" ? "dinosaurio" : ''}${
              lang === "en" ? "dinosaur" : ''
            }`}
          />
          <img
            src={bird}
            alt={`${lang === "es" ? "pájaro" : ''}${
              lang === "en" ? "bird" : ''
            }`}
          />
          <img
            src={person}
            alt={`${lang === "es" ? "persona" : ''}${
              lang === "en" ? "person" : ''
            }`}
          />
          <img
            src={ghostBuster}
            alt={`${lang === "es" ? "cazafantasmas" : ''}${
              lang === "en" ? "ghostBuster" : ''
            }`}
          />
          <img
            src={plant}
            alt={`${lang === "es" ? "planta" : ''}${
              lang === "en" ? "plant" : ''
            }`}
          />
          <img
            src={dog}
            alt={`${lang === "es" ? "perro" : ''}${
              lang === "en" ? "dog" : ''
            }`}
          />
          <img
            src={selfPortrait}
            alt={`${lang === "es" ? "autorretrato" : ''}${
              lang === "en" ? "selfPortrait" : ''
            }`}
          />
          <img
            src={portraits}
            alt={`${lang === "es" ? "retratos" : ''} ${
              lang === "en" ? "portraits" : ''
            }`}
          />
          <img
            src={catCrown}
            alt={`${lang === "es" ? "gato corona" : ''}${
              lang === "en" ? "catCrown" : ''
            }`}
          />
        </Slideshow>
      </SRLWrapper>
    </PageContainer>
  );
}
export default Drawings;
