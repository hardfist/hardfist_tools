import React, { useState } from 'react';
import * as type from 'styled-components/cssprop'; // eslint-disable-line
import { routes } from 'routes';
import lightTheme from 'theme/light.json';
import darkTheme from 'theme/dark.json';
import { ThemeProvider } from 'styled-components';
import { Route } from 'react-router-dom';
import { ThemeModeContext, ThemeMode } from 'context/theme_mode';
import { GlobalStyle } from 'global';
export const App: React.FC = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  return (
    <>
      <GlobalStyle />
      <ThemeModeContext.Provider
        value={{
          themeMode,
          setThemeMode
        }}
      >
        <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
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
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </>
  );
};
