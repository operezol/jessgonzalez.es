import * as React from "react";
import styled from "@emotion/styled";

const BackArea = styled.span`
    font-family:'Jess';
    position:absolute;
    line-height:1rem;
    font-size:.5rem;
    span{
        font-size:.75rem;
    }
`;

const Back = ({ children}) => {
  return (
    <BackArea>
      {children}
    </BackArea>
  );
};

export default Back;
