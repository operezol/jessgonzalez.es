import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import digital from "../../resources/illustration/digital/digital.jpg";

export default class Digital extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Menu />
        <h1>DIGITAL</h1>
        <img src={digital} alt="digital"/>
        <p>ENTRA EN MIS REDES PARA VER MÁS SOBRE MI TRABAJO DIGITAL</p>
        <Footer />
      </>
    );
  }
}
