import React from "react";
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { routes } from "routes/routes";
import MainTemaplte from "components/Templates/MainTemplate/MainTemplate";
import { theme } from "assets/styles/theme";
import { GlobalStyle } from "assets/styles/globalStyles";

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
          <MainTemaplte>
            <Switch>
              <Redirect from="/old-path" to="/new-path" />
              {routes.map((route) => (
                <Route key={route.path} {...route} />
              ))}
              <Redirect to="/stickers"></Redirect>
            </Switch>
          </MainTemaplte>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
