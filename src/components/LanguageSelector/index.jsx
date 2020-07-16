import * as React from "react";
import styled from "@emotion/styled";

const LangNav = styled.nav`
  position: absolute;
  top: 1vh;
  right: 1vw;
  button {
    &.active {
      font-family: Jess;
    }
  }
`;

function LanguageSelector({ lang, setLang }) {
  return (
    <LangNav>
      <button
        className={lang === "en" ? "active" : null}
        onClick={() => {
          setLang("en");
        }}
      >
        ENG
      </button>
      <span> / </span>
      <button
        className={lang === "es" ? "active" : null}
        onClick={() => {
          setLang("es");
        }}
      >
        CAST
      </button>
    </LangNav>
  );
}
export default LanguageSelector;
