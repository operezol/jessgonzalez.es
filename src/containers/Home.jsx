import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Illustration from "../resources/homeMobile/illustration.gif";
import GraphicDesign from "../resources/homeMobile/graphicDesign.gif";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Menu />
        <Link to="/Illustration">
          <img src={Illustration} alt="Illustration" />
          <br />
          <span>Illustration</span>
        </Link>
        <br />
        <Link to="/graphicDesign">
          <img src={GraphicDesign} alt="Graphic Design" />
          <br />
          <span>Graphic Design</span>
        </Link>
        <Footer />
      </>
    );
  }
}
