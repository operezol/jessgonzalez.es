import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LanguageSelector from "../components/LanguageSelector";
import Illustration from "../resources/homeMobile/illustration.gif";
import GraphicDesign from "../resources/homeMobile/graphicDesign.gif";
import { Link } from "react-router-dom"


export default class Home extends React.Component {
  public render() {
    return (
      <>
        <Header />
        <LanguageSelector />
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
