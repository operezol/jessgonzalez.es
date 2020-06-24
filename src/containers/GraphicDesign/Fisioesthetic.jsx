import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import fisioesthetic from "../../resources/graphicDesign/fisioesthetic-btn.jpg";
import fisioesthetic1 from "../../resources/graphicDesign/fisioesthetic-1.jpg";
import fisioesthetic2 from "../../resources/graphicDesign/fisioesthetic-2.jpg";
import fisioesthetic3 from "../../resources/graphicDesign/fisioesthetic-3.jpg";
import fisioesthetic4 from "../../resources/graphicDesign/fisioesthetic-4.jpg";
export default class Fisioesthetic extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Menu />
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
        <Footer />
      </>
    );
  }
}
