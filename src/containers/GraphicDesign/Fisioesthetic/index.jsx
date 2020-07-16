import * as React from "react";

import PageContainer from '../../../components/Page';

import fisioesthetic from "../../../resources/graphicDesign/fisioesthetic-btn.jpg";
import fisioesthetic1 from "../../../resources/graphicDesign/fisioesthetic-1.jpg";
import fisioesthetic2 from "../../../resources/graphicDesign/fisioesthetic-2.jpg";
import fisioesthetic3 from "../../../resources/graphicDesign/fisioesthetic-3.jpg";
import fisioesthetic4 from "../../../resources/graphicDesign/fisioesthetic-4.jpg";

function Fisioesthetic({ lang, mobileMenuStatus, setMobileMenuStatus }) {
  return (
    <PageContainer  lang={lang}>
      <img src={fisioesthetic} alt="" />
      <p>
        Fisioesthetic® ofrece servicios de fisioterapia, estética, nutrición y
        terápias alternativas.
      </p>
      <p>
        El gabinete ya contaba con un logotipo, así que el trabajo inicial
        consistió en crear una identidad gráfica completa a partir de este
        elemento.
      </p>
      <p>FISIOESTHETIC®</p>
      <p>Diseño de identidad</p>
      <img src={fisioesthetic1} alt="" />
      <img src={fisioesthetic2} alt="" />
      <img src={fisioesthetic3} alt="" />
      <img src={fisioesthetic4} alt="" />
      </PageContainer>
  );
}
export default Fisioesthetic;
