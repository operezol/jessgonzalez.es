import * as React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import LanguageSelector from "../../components/LanguageSelector";
import Footer from "../../components/Footer";

import IllustrationGif from "../../resources/homeMobile/illustration.gif";
import GraphicDesign from "../../resources/homeMobile/graphicDesign.gif";
import JessGonzalez from "../../resources/JessGonzalez.svg";

const Page = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const InnerNav = styled.nav`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin:10%;
        &:hover {
          font-family: Jess;
          text-decoration: underline;
        }
      }
`;

const Logo = styled.img`
  padding: 10% 25%;
  width: 100%;
`;

function Home({ lang, setLang }) {
  return (
    <Page>
      <Logo src={JessGonzalez} alt="" />
      <LanguageSelector lang={lang} setLang={setLang} />
      <InnerNav>
        <Link to="/Illustration">
          <img src={IllustrationGif} alt="Illustration" />
          <span>
            {lang === "es" && "Ilustración"}
            {lang === "en" && "Illustration"}
          </span>
        </Link>
        <Link to="/graphic-design">
          <img src={GraphicDesign} alt="Graphic Design" />
          <span>
            {lang === "es" && "Diseño Gráfico"}
            {lang === "en" && "Graphic Design"}
          </span>
        </Link>
      </InnerNav>
      <Footer />
    </Page>
  );
}
export default Home;
