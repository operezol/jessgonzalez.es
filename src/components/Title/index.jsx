import * as React from "react";
import styled from "@emotion/styled";

const TitleArea = styled.div`
  padding: 0 1rem;
  position: relative;
  h1 {
    text-align: center;
  }
`;

const Title = ({ children }) => {
  return <TitleArea>{children}</TitleArea>;
};

export default Title;
