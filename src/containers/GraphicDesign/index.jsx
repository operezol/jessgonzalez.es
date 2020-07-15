import * as React from "react";
import { Link } from "react-router-dom";

import PageContainer from "../../components/Page";

import ekotarriko from "../../resources/graphicDesign/ekotarriko-btn.jpg";
import talita from "../../resources/graphicDesign/talita-btn.jpg";
import fisioesthetic from "../../resources/graphicDesign/fisioesthetic-btn.jpg";
import logo from "../../resources/graphicDesign/logos-btn.jpg";

function GraphicDesign({ lang }) {
  const renderLinkContent = (imageObj) => {
    return (
      <>
        <img src={imageObj} alt="" />
        <span>
          {lang === "es" && "VER MÁS"}
          {lang === "en" && "SEE MORE"}
          {">"}
        </span>
      </>
    );
  };

  return (
    <PageContainer lang={lang}>
      <h1>Graphic Design</h1>
      <main>
        <Link to="/graphic-design/ekotarriko">
          {renderLinkContent(ekotarriko)}
        </Link>
        <Link to="/graphic-design/talita">{renderLinkContent(talita)}</Link>
        <Link to="/graphic-design/fisioesthetic">
          {renderLinkContent(fisioesthetic)}
        </Link>
        <Link to="/graphic-design/logos">{renderLinkContent(logo)}</Link>
      </main>
    </PageContainer>
  );
}
export default GraphicDesign;
