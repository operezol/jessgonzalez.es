import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import ekotarriko from "../../resources/graphicDesign/ekotarriko-btn.jpg";
import ekotarriko1 from "../../resources/graphicDesign/ekotarriko-1.jpg";
import ekotarriko2 from "../../resources/graphicDesign/ekotarriko-2.jpg";
import ekotarriko3 from "../../resources/graphicDesign/ekotarriko-3.jpg";
import ekotarriko4 from "../../resources/graphicDesign/ekotarriko-4.jpg";
export default class EkotarriKo extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Menu />
        <img src={ekotarriko} alt="" />
        <p>
          <strong>Ekotarriko</strong> es una marca de comida preparada, ecológica y tradicional
          creada en Euskadi por madre e hija.
        </p>
        <p>
          El reto para esta marca era dar a conocer un <strong>producto nuevo y
          diferente</strong> en un mercado cada vez más competitívo.
        </p>
        <p>
          La combinación de <strong>tradición y actualidad</strong> de esta marca se tenía que
          ver reflejada en la gráfica. Por eso se unen diferentes técnicas como
          ilustración a lápiz, acuarela e ilustración digital.
        </p>
        <p>EKOTARRIkO</p>
        <p>Diseño de identidad</p>
        <p>Dirección de arte</p>
        <img src={ekotarriko1} alt="" />
        <img src={ekotarriko2} alt="" />
        <img src={ekotarriko3} alt="" />
        <img src={ekotarriko4} alt="" />
        <Footer />
      </>
    );
  }
}
