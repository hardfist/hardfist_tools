import { createStore, createTypedHooks } from 'easy-peasy';
import { get_todo_list } from 'service/app';
import * as models from 'models';
export interface Injections {
  get_todo_list: typeof get_todo_list;
}
export const store = createStore(models, {
  injections: {
    get_todo_list
  }
});
console.log('state:', store.getState().counter);

const typedHooks = createTypedHooks<typeof models>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
