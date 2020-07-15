import * as React from "react";
import styled from "@emotion/styled";

import Header from '../Header';
import Footer from "../Footer";

const StyledPage = styled.div`
  min-height: 100vh;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  main{
    max-width: 1366px;
    margin:0 auto;
  } 
`;

const PageContainer = ({ lang, digital = false, children }) => {
  return (
    <StyledPage>
      <Header  lang={lang}/>
      <main>{children}</main>
      <Footer digital={digital} />
    </StyledPage>
  );
};

export default PageContainer;
