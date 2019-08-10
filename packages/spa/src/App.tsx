import React from 'react';
import routes from 'routes';
import { BrowserRouter, Route } from 'react-router-dom';

export const App = () => {
  return (
    <React.Suspense fallback={<div>loading....</div>}>
      {routes.map(x => (
        <Route
          path={x.path}
          component={x.component}
          key={x.path}
          exact={x.exact}
        />
      ))}
    </React.Suspense>
  );
};
