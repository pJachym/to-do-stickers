import { GlobalStyle } from "assets/styles/globalStyles";
import React, { useState, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainTemaplte from "components/Templates/MainTemplate/MainTemplate";
import StickersWrapper from "components/Organisms/StickersWrapper/StickersWrapper";
import AddSticker from "components/Organisms/AddSticker/AddSticker";

const Wrapper = styled.div``;

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <MainTemaplte>
            <Route path="/">
              <Redirect to="/stickers"></Redirect>
            </Route>
            <Route path="/stickers">
              <StickersWrapper></StickersWrapper>
            </Route>
            <Route path="/add-sticker">
              <AddSticker></AddSticker>
            </Route>
          </MainTemaplte>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
