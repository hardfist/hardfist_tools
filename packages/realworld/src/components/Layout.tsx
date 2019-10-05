import React from 'react';
import { Header } from 'components/Header';
import { useStoreState } from 'store';

export const Layout: React.FC = props => {
  const { isAuthenticated, currentUser } = useStoreState(x => x.auth);

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
      {props.children}
    </div>
  );
};
