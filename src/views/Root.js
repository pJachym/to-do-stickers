import { GlobalStyle } from "assets/styles/globalStyles";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MainTemaplte from "components/Templates/MainTemplate/MainTemplate";
import StickersWrapper from "components/Organisms/StickersWrapper/StickersWrapper";
import AddSticker from "components/Organisms/AddSticker/AddSticker";

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
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
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
