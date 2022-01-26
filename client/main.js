import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

import store, { history } from './store/configureStore';
import { verifyToken } from './services/tokenService';
import App from './containers/app/AppContainer';

const mountNode = document.getElementById('root');

const theme = createTheme({
  zIndex: {
    appBar: 1251,
    navDrawer: 1250,
  },
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: blue,
  },
});

// Used to log in if token is valid
store.dispatch(verifyToken());

ReactDOM.render(
  <Suspense fallback={<div>Error! Please refresh the page</div>}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  </Suspense>,
  mountNode
);
