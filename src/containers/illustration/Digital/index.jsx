import * as React from "react";


import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import digital from "../../../resources/illustration/digital/digital.jpg";

function Digital({ lang }) {
  return (
    <>
      <Header lang={lang} />
      <h1>DIGITAL</h1>
      <img src={digital} alt="digital" />
      <p>ENTRA EN MIS REDES PARA VER MÁS SOBRE MI TRABAJO DIGITAL</p>
      <Footer digital={true} />
    </>
  );
}
export default Digital;
