import styled from 'styled-components';
import 'styled-components/macro';
import { css } from 'styled-components';
import types from 'styled-components/cssprop';
import React from 'react';
import { Header } from 'components/header';

const LayoutWrapper = styled.div`
  position: relative;
  padding: 42px 21px;
  background-color: #282c34;
`;
export const Layout: React.FC = props => {
  return (
    <LayoutWrapper>
      <Header />
      {props.children}
    </LayoutWrapper>
  );
};
