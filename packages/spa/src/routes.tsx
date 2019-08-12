import React from 'react';
import { wrapDefault } from 'utils/export';
export const routes = [
  {
    path: '/',
    exact: true,
    component: React.lazy(wrapDefault(() => import('pages/home'), 'Home'))
  }
];
