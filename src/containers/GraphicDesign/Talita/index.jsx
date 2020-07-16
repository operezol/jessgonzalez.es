import * as React from "react";

import PageContainer from "../../../components/Page";

import talita from "../../../resources/graphicDesign/talita-btn.jpg";
import talita1 from "../../../resources/graphicDesign/talita-1.jpg";
import talita2 from "../../../resources/graphicDesign/talita-2.jpg";
import talita3 from "../../../resources/graphicDesign/talita-3.jpg";
import talita4 from "../../../resources/graphicDesign/talita-4.jpg";
import talita5 from "../../../resources/graphicDesign/talita-5.jpg";

function Talita({ lang, mobileMenuStatus, setMobileMenuStatus }) {
  return (
    <PageContainer lang={lang} mobileMenuStatus={mobileMenuStatus} setMobileMenuStatus={setMobileMenuStatus}>
      <img src={talita} alt="" />
      <p>
        El objetivo de la fundación era modernizar y dar un nuevo enfoque a su
        imagen. El rediseño del logotipo marcó una línea para generar un sistema
        visual que englobara todos los materiales y puntos de contacto con el
        público y los potenciales donantes.
      </p>
      <p>
        El concepto sobre el que trabajé toda la imagen es “el abrazo”. El
        abrazo como representación del amor y el apoyo hacia las personas que
        más lo necesitan.
      </p>
      <p>FUNDACIÓ TALITA</p>
      <p>Diseño de identidad</p>
      <img src={talita1} alt="" />
      <img src={talita2} alt="" />
      <img src={talita3} alt="" />
      <img src={talita4} alt="" />
      <img src={talita5} alt="" />
    </PageContainer>
  );
}
export default Talita;
