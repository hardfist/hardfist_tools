import React from 'react';
import styled from 'styled-components';
import { Toggle } from 'components/toggle';
const HeaderWrapper = styled.div`
  display: flex;
  height: 42px;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: flex-start;
`;
const Title = styled.h1``;
export const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Overreacted</Title>
      <Toggle />
    </HeaderWrapper>
  );
};
