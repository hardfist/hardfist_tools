import { init } from '@rematch/core';
import immerPlugin from '@rematch/immer';
import { RematchRootDispatch, RematchRootState } from './models/util';
import * as models from 'models';
const immer = immerPlugin();
export const store: Store = init({
  models,
  plugins: [immer]
});

export type RootState = RematchRootState<typeof models>;

export type RootDispatch = RematchRootDispatch<typeof models>;
export type Store = {
  name: string;
  dispatch: RootDispatch;
  getState(): RootState;
};
