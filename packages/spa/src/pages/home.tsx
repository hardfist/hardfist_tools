import React, { useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootDispatch, RootState, select, RootSelect } from 'store';
import styled, { keyframes } from 'styled-components';
import { Layout } from 'components/layout';
import { ReactComponent as LogoIcon } from 'assets/logo.svg';
const AppWrapper = styled.div`
  text-align: center;
`;
const AppHeader = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const app_logo_spin = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Logo = styled(LogoIcon)`
  animation: ${app_logo_spin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

const Link = styled.a`
  color: #61dafb;
`;
const selection = select((model: RootSelect) => {
  return {
    total: model.app.total
  };
});
export const Home: React.FC = () => {
  const { name, total } = useSelector((state: RootState) => {
    return { ...state.app, ...selection(state) };
  });
  const dispatch = useDispatch() as RootDispatch;
  useEffect(() => {
    const id = setTimeout(() => {
      dispatch.app.updateNameAsync('redux');
    });
    return () => clearTimeout(id);
  }, [dispatch.app]);

  return (
    <>
      <Layout>
        <AppWrapper>
          <AppHeader>
            <Logo />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <Link
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn {name} : {total}
            </Link>
          </AppHeader>
        </AppWrapper>
      </Layout>
    </>
  );
};
