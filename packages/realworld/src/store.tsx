import { createStore, createTypedHooks } from 'easy-peasy';
import * as models from './model';

export const store = createStore(models);

const typedHooks = createTypedHooks<typeof models>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;
export type RootModel = typeof models;
