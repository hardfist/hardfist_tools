import { routes } from 'routes';
import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <>
      {routes.map(x => (
        <Link key={x.path} to={x.path}>
          {x.path}
        </Link>
      ))}
    </>
  );
};
