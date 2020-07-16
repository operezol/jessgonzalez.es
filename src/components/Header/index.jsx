import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import JessGonzalez from "../../resources/JessGonzalez.svg";
import Menu from "../Menu";

const StyledHeader = styled.header`
  width:100%;
  @media (min-width: 1000px) {
    width: 40rem;
  }
  margin: 0 auto;
  a {
    display: inline-block;
  }
  img {
    height: 2rem;
    margin: 1rem;
  }
`;

function Header({ lang, mobileMenuStatus, setMobileMenuStatus }) {
  return (
    <StyledHeader>
      <NavLink to="/">
        <img src={JessGonzalez} alt="Logo Jess Gonzalez" />
      </NavLink>
      <Menu
        lang={lang}
        mobileMenuStatus={mobileMenuStatus}
        setMobileMenuStatus={setMobileMenuStatus}
      />
    </StyledHeader>
  );
}

export default Header;
