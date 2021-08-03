import React, { useState, useContext } from "react";
import Navigation from "components/Organisms/Navigation/Navigation";
import styled from "styled-components";
import Articles from "components/Organisms/Articles/Articles";
import StickersProvider from "components/providers/StickersProvider";

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  display: grid;
  grid-template-columns: 200px 1fr 410px;
  margin: 0;
  padding: 0;
`;

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
