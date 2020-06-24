import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import ekotarriko from "../../resources/graphicDesign/ekotarriko-btn.jpg";
import talita from "../../resources/graphicDesign/talita-btn.jpg";
import fisioesthetic from "../../resources/graphicDesign/fisioesthetic-btn.jpg";
import logo from "../../resources/graphicDesign/logos-btn.jpg";
import { Link } from "react-router-dom";
export default class GraphicDesign extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Menu />
        <h1>Graphic Design</h1>
        <Link to="/graphic-design/ekotarriko">
          <img src={ekotarriko} alt="" />
          <span>VER MÁS {">"}</span>
        </Link>
        <Link to="/graphic-design/talita">
          <img src={talita} alt="" />
          <span>VER MÁS {">"}</span>
        </Link>
        <Link to="/graphic-design/fisioesthetic">
          <img src={fisioesthetic} alt="" />
          <span>VER MÁS {">"}</span>
        </Link>
        <Link to="/graphic-design/logos">
          <img src={logo} alt="" />
          <span>VER MÁS {">"}</span>
        </Link>
        <Footer />
      </>
    );
  }
}
