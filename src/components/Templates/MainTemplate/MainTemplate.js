import React from "react";
import Navigation from "components/Organisms/Navigation/Navigation";
import Articles from "components/Organisms/Articles/Articles";
import StickersProvider from "components/providers/StickersProvider";
import { Wrapper } from "./MainTemplate.styles";

const MainTemaplte = ({ children }) => {
  return (
    <StickersProvider>
      <Wrapper>
        <Navigation />
        {children}
        <Articles />
      </Wrapper>
    </StickersProvider>
  );
};

export default MainTemaplte;
