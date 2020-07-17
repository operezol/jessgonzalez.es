import * as React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import PageContainer from "../../../components/Page";
import Title from "../../../components/Title";
import Back from "../../../components/Back";
import digital from "../../../resources/illustration/digital/digital.jpg";

const DigitalContainer = styled.div`
  padding:1rem;
  img{
    width:100%;
  }
`;

function Digital({ lang, mobileMenuStatus, setMobileMenuStatus }) {
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
          {lang === "es" && "DIGITAL"}
          {lang === "en" && "DIGITAL"}
        </h1>
      </Title>
      <DigitalContainer>
      <img src={digital} alt="digital" />
      <p>
        {lang === "es" &&
          "ENTRA EN MIS REDES PARA VER MÁS SOBRE MI TRABAJO DIGITAL"}
        {lang === "en" &&
          "VISIT MY SOCIAL NETWORKS TO SEE MORE ABOUT MY DIGITAL WORK"}
      </p>
      </DigitalContainer>

    </PageContainer>
  );
}
export default Digital;
