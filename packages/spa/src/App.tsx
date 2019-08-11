import React, { useState } from 'react';
import routes from 'routes';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeContext, Theme } from 'context/theme';
import { GlobalStyle } from 'global';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  return (
    <>
      <GlobalStyle />
      <ThemeContext.Provider
        value={{
          theme,
          setTheme
        }}
      >
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
      </ThemeContext.Provider>
    </>
  );
};
