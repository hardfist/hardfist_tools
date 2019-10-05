import ReactDOM from 'react-dom';
import React from 'react';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { Home } from 'pages/Home';
import { StoreProvider } from 'easy-peasy';
import { BrowserRouter, Route } from 'react-router-dom';
import { store } from 'store';
import { Layout } from 'components/Layout';
ReactDOM.render(
  <StoreProvider store={store}>
    <BrowserRouter>
      <Layout>
        <Route path="/" component={Home} />
        <Route path="/login" compnoent={Login} />
        <Route path="/register" component={Register} />
      </Layout>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);
