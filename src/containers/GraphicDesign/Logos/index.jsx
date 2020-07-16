import * as React from "react";

import PageContainer from "../../../components/Page";

import nesscat from "../../../resources/graphicDesign/logo-nesscat.jpg";
import cooperativa from "../../../resources/graphicDesign/logo-cooperativa-agrotobalinesa.jpg";
import amparo from "../../../resources/graphicDesign/logo-amparo-baena.jpg";
import nitryus from "../../../resources/graphicDesign/logo-nitryus.jpg";
import logora from "../../../resources/graphicDesign/logo-ra.jpg";

function Logos({ lang, mobileMenuStatus, setMobileMenuStatus }) {
  return (
    <PageContainer
      lang={lang}
      mobileMenuStatus={mobileMenuStatus}
      setMobileMenuStatus={setMobileMenuStatus}
    >
      <img src={nesscat} alt="" />
      <p>NESSCAT</p>
      <p>Servicios de vending</p>
      <img src={cooperativa} alt="" />
      <p>SDAD. COOP. AGROTOBALINESA</p>
      <p>Cooperativa agrícola</p>
      <img src={amparo} alt="" />
      <p>AMPARO BAENA</p>
      <p>Fisioterapeuta y fundadora de Fisioesthetic</p>
      <img src={nitryus} alt="" />
      <p>NITRYUS</p>
      <p>Gamer</p>
      <img src={logora} alt="" />
      <p>RALUCA Y ARNAU</p>
      <p>Boda tradicional rumana</p>
    </PageContainer>
  );
}
export default Logos;
