import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { StoreProvider } from 'easy-peasy';
import * as serviceWorker from './serviceWorker';
import { typography } from 'utils/typography';
import { store } from 'store';
typography.injectStyles();
ReactDOM.render(
  <StoreProvider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </StoreProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
