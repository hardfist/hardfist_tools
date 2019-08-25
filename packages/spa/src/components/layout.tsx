import styled from 'styled-components';
import 'styled-components/macro';
import React from 'react';
import { Header } from 'components/header';
import { Nav } from 'components/nav';

const LayoutWrapper = styled.div`
  position: relative;
  padding: 42px 21px;
  background-color: ${p => p.theme.bg};
`;
export const Layout: React.FC = props => {
  return (
    <LayoutWrapper>
      <Header />
      <Nav />
      {props.children}
    </LayoutWrapper>
  );
};
