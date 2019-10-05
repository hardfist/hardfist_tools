import React, { useEffect } from 'react';
import { Header } from 'components/Header';
import { useStoreState, useStoreActions } from 'store';
import { useUnmount } from 'react-use';
import { setToken } from 'utils/agent';
import { useRouter } from 'hooks/router';

export const App: React.FC = props => {
  const { appLoaded, appName, currentUser, redirectTo } = useStoreState(
    x => x.common
  );
  const { redirect } = useStoreActions(x => x.common);
  const router = useRouter();
  useEffect(() => {
    if (redirectTo) {
      router.history.replace(redirectTo);
    }
    redirect();
  }, [redirectTo, redirect, router.history]);
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
