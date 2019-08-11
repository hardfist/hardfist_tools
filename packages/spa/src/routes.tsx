import React from 'react';
export default [
  {
    path: '/',
    exact: true,
    component: React.lazy(() => import('./pages/home'))
  }
];
