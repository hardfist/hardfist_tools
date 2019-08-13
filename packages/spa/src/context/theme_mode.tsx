import React from 'react';
export const ThemeModeContext = React.createContext<{
  themeMode: ThemeMode;
  setThemeMode: (theme: ThemeMode) => void;
}>({ themeMode: 'light', setThemeMode: (_: ThemeMode) => {} });
export type ThemeMode = 'light' | 'dark';
