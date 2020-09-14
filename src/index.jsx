import React, { StrictMode } from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import { setGlobal } from "reactn";
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Router, Redirect, Route, Switch } from "wouter";

import AppBar from "./components/AppBar";
import { defaultGlobalState } from "./services/constants";
import Template from "./screens/Template";
import Voucher from "./screens/Voucher";

/**
 *  Base theme - material UI
 */
const theme = createMuiTheme({
  // Theme settings
});

// Setting default global state
setGlobal(defaultGlobalState);

/**
 * App base - Routing and css theme
 */
const Main = () => {
  return (
    <StrictMode>
      <CssBaseline />

      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <AppBar />

          <Router>
            <Switch>
              <Route path="/templates" component={Template} />
              <Route path="/vouchers" component={Voucher} />
              <Route path="/:rest*" component={() => <Redirect to={`/templates`} />} />
            </Switch>
          </Router>
        </ThemeProvider>
      </MuiThemeProvider>
    </StrictMode>
  );
};

render(<Main />, document.getElementById("root"));
