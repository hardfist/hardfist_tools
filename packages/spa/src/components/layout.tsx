import styled from 'styled-components';
import 'styled-components/macro';
import React from 'react';
import { Header } from 'components/header';

const LayoutWrapper = styled.div`
  position: relative;
  padding: 42px 21px;
  background-color: ${p => p.theme.bg};
`;
export const Layout: React.FC = props => {
  return (
    <LayoutWrapper>
      <Header />
      {props.children}
    </LayoutWrapper>
  );
};
