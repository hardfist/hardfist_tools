import { createComponentStore, createContextStore } from 'easy-peasy';
import { useStoreState, useStoreActions } from 'store';

import { counter } from './model';

export const CounterContext = createContextStore(counter);
type Counter = ReturnType<typeof useLocalCounter>;
export type CounterState = Counter[0];
export type CounterActions = Counter[1];

// local state
export const useLocalCounter = createComponentStore(counter);

// contxt state
export function useContextCounter(): Counter {
  const state = CounterContext.useStoreState(x => x);
  const actions = CounterContext.useStoreActions(x => x);
  return [state, actions];
}

// redux state
export function useReduxCounter(): Counter {
  const state = useStoreState(x => x.counter);
  const actions = useStoreActions(x => x.counter);
  return [state, actions];
}
