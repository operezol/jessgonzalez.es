import * as React from "react";
import { NavLink } from "react-router-dom";
import HamburguerIcon from "../../resources/mobile/HamburguerIcon.svg";
import CloseIcon from "../../resources/mobile/CloseIcon.svg";

function Menu({ lang }) {
  return (
    <>
      <button>
        <img src={HamburguerIcon} width="50px" height="50px" alt="" />
      </button>
      <button>
        <img src={CloseIcon} width="50px" height="50px" alt="" />
      </button>
      <NavLink to="/Illustration" activeStyle={{ fontFamily: "Jess" }}>
        {lang === "es" && "Ilustración"}
        {lang === "en" && "Illustration"}
      </NavLink>
      <NavLink to="/graphic-design" activeStyle={{ fontFamily: "Jess" }}>
        {lang === "es" && "Diseño Gráfico"}
        {lang === "en" && "Graphic Design"}
      </NavLink>
      <NavLink to="/about" activeStyle={{ fontFamily: "Jess" }}>
        {lang === "es" && "Sobre mi"}
        {lang === "en" && "About me"}
      </NavLink>
    </>
  );
}
export default Menu;
