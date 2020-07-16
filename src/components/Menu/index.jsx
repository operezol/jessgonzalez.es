import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import HamburguerIcon from "../../resources/mobile/HamburguerIcon.svg";
import CloseIcon from "../../resources/mobile/CloseIcon.svg";

const StyledMenu = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  transition: left 1s ease-in-out;
  left: 100%;
  &.opened {
    left: 0;
  }
  @media (min-width: 768px) {
    padding-top: 0;
    width: auto;
    position: relative;
    float: right;
    flex-direction: row;
    left:0;
  }
  a {
    line-height: 4rem;
    text-align: center;
    width: 100%;
    @media (min-width: 768px) {
      width: 6.3rem;
    }
  }
`;

const Hamburguer = styled.button`
  float: right;
  display: block;
  img {
    width: 25px;
    height: 25px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  img {
    width: 25px;
    height: 25px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

function Menu({ lang, mobileMenuStatus, setMobileMenuStatus }) {
  const handleClick = () => {
    setMobileMenuStatus(!mobileMenuStatus);
  };
  return (
    <>
      <Hamburguer
        onClick={() => {
          handleClick();
        }}
      >
        <img src={HamburguerIcon} alt="" />
      </Hamburguer>
      <StyledMenu className={mobileMenuStatus ? "opened" : null}>
        <CloseButton
          onClick={() => {
            handleClick();
          }}
        >
          <img src={CloseIcon} alt="" />
        </CloseButton>
        <NavLink
          to="/Illustration"
          activeStyle={{ fontFamily: "Jess" }}
          onClick={() => {
            handleClick();
          }}
        >
          {lang === "es" && "Ilustración"}
          {lang === "en" && "Illustration"}
        </NavLink>
        <NavLink
          to="/graphic-design"
          activeStyle={{ fontFamily: "Jess" }}
          onClick={() => {
            handleClick();
          }}
        >
          {lang === "es" && "Diseño Gráfico"}
          {lang === "en" && "Graphic Design"}
        </NavLink>
        <NavLink
          to="/about"
          activeStyle={{ fontFamily: "Jess" }}
          onClick={() => {
            handleClick();
          }}
        >
          {lang === "es" && "Sobre mi"}
          {lang === "en" && "About me"}
        </NavLink>
      </StyledMenu>
    </>
  );
}
export default Menu;
