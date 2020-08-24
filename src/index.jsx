import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import { setGlobal } from 'reactn';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {
    Router,
    Redirect,
    Route,
    Switch,
} from 'wouter';

import Template from './screens/Template';
import { defaultGlobalState } from './services/constants'

/** 
 * Main container
 */
const MainContainer = styled.div`
    display: flex;
    width: 100%;
`;

/**
 *  Base theme - material UI
 */
const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#fff',
            main: '#fff',
            dark: '#121212',
            contrastText: '#fff',
        },
    },
});

// Setting default global state
setGlobal(defaultGlobalState);

/** 
 * App base - Routing and css theme
 */
const Main = () => {
  return <StrictMode>
        <CssBaseline />

        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <MainContainer>
                    <Router>
                        <Switch>
                            <Route path="/" component={Template} />
                            <Route path="/:rest*" component={() => <Redirect to={`/`} />} />
                        </Switch>
                    </Router>
                </MainContainer>
            </ThemeProvider>
        </MuiThemeProvider>
    </StrictMode>;
} 

render(<Main />, document.getElementById('root'));