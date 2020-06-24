import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import { Link } from "react-router-dom"
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
        <p><Link to="./drawings"><img src={drawings} width="50" alt="Drawings"/><span>DRAWINGS</span> </Link></p>
        <p><Link to="./paintings"><img src={paintings} width="50" alt="Paintings" /><span>PAINTINGS</span> </Link></p>
        <p><Link to="./digital"><img src={digital} width="50" alt="Digital"/><span>DIGITAL</span> </Link></p>
        <Footer />
      </>
    );
  }
}
