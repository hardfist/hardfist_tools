import React, { useEffect } from 'react';
import { Header } from 'components/Header';
import { useStoreState } from 'store';
import { timer, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { action, thunk } from 'easy-peasy';
import { useLocalStore } from 'utils/model';
const unsubscribe$ = new Subject();
const everySecond$ = timer(0, 1000).pipe(takeUntil(unsubscribe$));

const initial_state = {
  counter: 0
};
const actions = {
  inc_counter: action<State>(state => {
    state.counter++;
  })
};
const thunks = {
  start_counter: thunk<typeof actions>(actions => {
    everySecond$.subscribe(actions.inc_counter as any);
  })
};

type State = typeof initial_state;

export const Layout: React.FC = props => {
  const [{ counter }, { start_counter }] = useLocalStore({
    ...initial_state,
    ...actions,
    ...thunks
  });
  useEffect(() => {
    start_counter();
  }, [start_counter]);
  const { isAuthenticated, currentUser } = useStoreState(x => x.auth);

  if (isAuthenticated) {
    return (
      <div>
        <div>timer: {counter}</div>
        <Header currentUser={currentUser} />
        {props.children}
      </div>
    );
  }
  return (
    <div>
      <div>timer: {counter}</div>
      <Header currentUser={currentUser} />
      {props.children}
    </div>
  );
};
