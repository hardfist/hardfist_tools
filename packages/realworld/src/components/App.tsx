import React from 'react';
import { Header } from 'components/Header';
import { useStoreState } from 'store';
import { useUnmount } from 'react-use';
import { setToken } from 'utils/agent';

export const App: React.FC = props => {
  const { appLoaded, appName, currentUser } = useStoreState(x => x.common);

  useUnmount(() => {
    const token = window.localStorage.getItem('jwd');
    if (token) {
      setToken(token);
    }
  });
  // render
  if (appLoaded) {
    return (
      <div>
        <Header appName={appName} currentUser={currentUser} />
        {props.children}
      </div>
    );
  }
  return (
    <div>
      <Header appName={appName} currentUser={currentUser} />
    </div>
  );
};
