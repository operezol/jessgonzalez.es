import * as React from "react";
import styled from "@emotion/styled";

import domestika from "../../resources/footer/domestika.svg";
import instagram from "../../resources/footer/instagram.svg";
import linkedin from "../../resources/footer/linkedin.svg";
import twitter from "../../resources/footer/twitter.svg";

const PageFooter = styled.footer`
  display: flex;
  align-items: center;
  a {
    margin:.5rem;
    &:hover{
      font-family:Jess;
      text-decoration:underline;
    }
  }
`;


function Footer({ digital = false }) {
  return (
    <PageFooter>
      {digital ? (
        <>
          <a href="https://www.instagram.com/tyranosaurus_jess/">
            <img src={instagram} alt="Instagram" width="50" />
          </a>
          <a href="https://twitter.com/tyrano_jess">
            <img src={twitter} alt="Twitter" width="50" />
          </a>
        </>
      ) : (
        <>
          <a href="https://www.instagram.com/jess_gonzalez_ilustracion/">
            <img src={instagram} alt="Instagram" width="50" />
          </a>
          <a href="https://www.linkedin.com/in/jess-gonzalez-dise%C3%B1adora-grafica-e-ilustradora/">
            <img src={linkedin} alt="Linkedin" width="50" />
          </a>
          <a href="https://www.domestika.org/es/jess_gonzalez">
            <img src={domestika} alt="" width="50" />
          </a>
        </>
      )}
    </PageFooter>
  );
}
export default Footer;