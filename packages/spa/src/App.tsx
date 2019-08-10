import React from 'react';
import styled, { keyframes } from 'styled-components';
import { GlobalStyle } from './global';
import { ReactComponent as LogoIcon } from './logo.svg';
const AppWrapper = styled.div`
  text-align: center;
`;
const AppHeader = styled.div`
  background-color: #282c34;
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

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
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
            Learn React
          </Link>
        </AppHeader>
      </AppWrapper>
    </>
  );
};

export default App;
