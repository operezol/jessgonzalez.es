import * as React from "react";
import styled from "@emotion/styled";

import domestika from "../../resources/footer/domestika.svg";
import instagram from "../../resources/footer/instagram.svg";
import linkedin from "../../resources/footer/linkedin.svg";
import twitter from "../../resources/footer/twitter.svg";

const PageFooter = styled.footer`
  display: flex;
  justify-content: center;
  a {
    margin:1rem 1rem 1rem 0;
    width:1rem;
  }
`;


function Footer({ digital = false }) {
  return (
    <PageFooter>
      {digital ? (
        <>
          <a href="https://www.instagram.com/tyranosaurus_jess/">
            <img src={instagram} alt="Instagram"  />
          </a>
          <a href="https://twitter.com/tyrano_jess">
            <img src={twitter} alt="Twitter"  />
          </a>
        </>
      ) : (
        <>
          <a href="https://www.instagram.com/jess_gonzalez_ilustracion/">
            <img src={instagram} alt="Instagram"  />
          </a>
          <a href="https://www.linkedin.com/in/jess-gonzalez-dise%C3%B1adora-grafica-e-ilustradora/">
            <img src={linkedin} alt="Linkedin"  />
          </a>
          <a href="https://www.domestika.org/es/jess_gonzalez">
            <img src={domestika} alt=""  />
          </a>
        </>
      )}
    </PageFooter>
  );
}
export default Footer;
