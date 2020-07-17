import * as React from "react";
import styled from "@emotion/styled";

const MainContent = styled.div`
  padding: 1rem 0 0 1rem;
  img {
    padding: 0 1rem 1rem 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    column-count: 2;
    column-gap: 0;
    @media (min-width: 1280px) {
    }
    column-count: 3;
    column-gap: 0;
  }
`;

const Slideshow = ({ children}) => {
  return (
    <MainContent>
      {children}
    </MainContent>
  );
};

export default Slideshow;
