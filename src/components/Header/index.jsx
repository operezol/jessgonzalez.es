import * as React from "react";
import styled from "@emotion/styled";

import JessGonzalez from "../../resources/JessGonzalez.svg";
import Menu from "../Menu";

const StyledHeader = styled.header`
  @media (min-width: 1536px) {
    width: 1536px;
    margin: 0 auto;
  }
`;

function Header({ lang }) {
  return (
    <StyledHeader>
      <img src={JessGonzalez} width="200" alt="" />
      <Menu lang={lang} />
    </StyledHeader>
  );
}

export default Header;
