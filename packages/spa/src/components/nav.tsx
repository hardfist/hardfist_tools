import { routes } from 'routes';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  margin-left: 10px;
  text-decoration: none;
`;
export const Nav = () => {
  return (
    <>
      {routes.map(x => (
        <StyledLink key={x.path} to={x.path}>
          {x.path}
        </StyledLink>
      ))}
    </>
  );
};
