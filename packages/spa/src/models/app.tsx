import { RootDispatch, RootState } from 'store';
import { delay } from 'utils';

const initialState = {
  name: 'react'
};
export type appState = typeof initialState;

export const app = {
  state: initialState,
  reducers: {
    updateName(state: appState, name: string) {
      state.name = name;
    }
  },
  effects: (dispatch: RootDispatch) => ({
    async updateNameAsync(name: string) {
      await delay(1000);
      await dispatch.app.updateName(name);
    }
  }),
  selectors: (slice: any) => ({
    total() {
      return (state: RootState) => {
        return 'hello ';
      };
    },
    test() {
      return (state: RootState) => {
        return 1;
      };
    }
  })
};
