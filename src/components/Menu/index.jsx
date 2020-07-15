import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import HamburguerIcon from "../../resources/mobile/HamburguerIcon.svg";
import CloseIcon from "../../resources/mobile/CloseIcon.svg";

const StyledMenu = styled.nav`
  float: right;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  background-color:white;
  padding:1rem;
  @media (min-width: 768px) {
    position: relative;
    border: 0;
    flex-direction: row;
  }
`;

const Hamburguer = styled.button`
  float: right;
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;
const CloseButton = styled.button`
  float: right;
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

function Menu({ lang }) {
  return (
    <>
      <Hamburguer>
        <img src={HamburguerIcon} width="50px" height="50px" alt="" />
      </Hamburguer>
      <StyledMenu>
        <CloseButton>
          <img src={CloseIcon} width="50px" height="50px" alt="" />
        </CloseButton>
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
      </StyledMenu>
    </>
  );
}
export default Menu;
