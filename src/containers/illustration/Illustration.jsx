import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import drawings from "../../resources/illustration/drawings/drawings.svg";
import digital from "../../resources/illustration/digital/digital.svg";
import paintings from "../../resources/illustration/paintings/paintings.svg";
export default class Illustration extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Menu />
        <h1>Illustration</h1>
        <p><a href="/illustration/drawings"><img src={drawings} width="50" alt="Drawings"/><span>DRAWINGS</span> </a></p>
        <p><a href="/illustration/paintings"><img src={paintings} width="50" alt="Paintings" /><span>PAINTINGS</span> </a></p>
        <p><a href="/illustration/digital"><img src={digital} width="50" alt="Digital"/><span>DIGITAL</span> </a></p>
        <Footer />
      </>
    );
  }
}
