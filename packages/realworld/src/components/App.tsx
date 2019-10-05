import React from 'react';
import { Header } from 'components/Header';
import { useStoreState } from 'store';
import { useUnmount } from 'react-use';
import { setToken } from 'utils/agent';

export const App: React.FC = props => {
  const { isAuthenticated, currentUser } = useStoreState(x => x.auth);

  useUnmount(() => {
    const token = window.localStorage.getItem('jwd');
    if (token) {
      setToken(token);
    }
  });
  // render
  if (isAuthenticated) {
    return (
      <div>
        <Header currentUser={currentUser} />
        {props.children}
      </div>
    );
  }
  return (
    <div>
      <Header currentUser={currentUser} />
    </div>
  );
};
