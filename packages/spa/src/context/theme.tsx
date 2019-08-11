import React from 'react';
export const ThemeContext = React.createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({ theme: 'light', setTheme: (_: Theme) => {} });
export type Theme = 'light' | 'dark';
