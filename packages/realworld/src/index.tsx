import ReactDOM from 'react-dom';
import React from 'react';
import { StoreProvider } from 'easy-peasy';
import { BrowserRouter, Route } from 'react-router-dom';
import { store } from 'store';
import { routes } from 'routes';
ReactDOM.render(
  <StoreProvider store={store}>
    <BrowserRouter>
      {routes.map(x => (
        <Route path={x.path} component={x.component} key={x.path} />
      ))}
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);
