import * as React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import drawings from "../../resources/illustration/drawings/drawings.svg";
import digital from "../../resources/illustration/digital/digital.svg";
import paintings from "../../resources/illustration/paintings/paintings.svg";

function Illustration({ lang }) {
  return (
    <>
      <Header lang={lang} />
      <h1>Illustration</h1>
      <p>
        <Link to="/illustration/drawings">
          <img src={drawings} width="50" alt="Drawings" />
          <span>DRAWINGS</span>{" "}
        </Link>
      </p>
      <p>
        <Link to="/illustration/paintings">
          <img src={paintings} width="50" alt="Paintings" />
          <span>PAINTINGS</span>{" "}
        </Link>
      </p>
      <p>
        <Link to="/illustration/digital">
          <img src={digital} width="50" alt="Digital" />
          <span>DIGITAL</span>{" "}
        </Link>
      </p>
      <Footer />
    </>
  );
}
export default Illustration;
