import { init } from '@rematch/core';
import immerPlugin from '@rematch/immer';
import selectPlugin from '@rematch/select';
import {
  RematchRootDispatch,
  RematchRootState,
  RematchRootSelect
} from '@hardfist/rematch';
import * as models from 'models';
export const store: Store = init({
  models,
  plugins: [immerPlugin(), selectPlugin()]
});
const { select } = store;

export { select };

export type RootState = RematchRootState<typeof models>;

export type RootDispatch = RematchRootDispatch<typeof models>;
export type RootSelect = RematchRootSelect<typeof models>;

export type Store = {
  select: <T>(
    calback: (select: RootSelect) => T
  ) => (rootState: RootState) => T;
  name: string;
  dispatch: RootDispatch;
  getState(): RootState;
};
