import ReactDOM from 'react-dom';
import React from 'react';
import { Login } from 'pages/Login';

import { Register } from 'pages/Register';
import { Home } from 'pages/Home';
import { StoreProvider } from 'easy-peasy';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { store } from 'store';
import { Layout } from 'components/Layout';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
