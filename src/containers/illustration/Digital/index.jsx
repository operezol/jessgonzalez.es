import * as React from "react";

import PageContainer from "../../../components/Page";

import digital from "../../../resources/illustration/digital/digital.jpg";

function Digital({ lang }) {
  return (
    <PageContainer lang={lang}>
      <h1>DIGITAL</h1>
      <img src={digital} alt="digital" />
      <p>ENTRA EN MIS REDES PARA VER MÁS SOBRE MI TRABAJO DIGITAL</p>
    </PageContainer>
  );
}
export default Digital;
