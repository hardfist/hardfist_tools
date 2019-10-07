/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createComponentStore,
  EasyPeasyConfig,
  StoreModelInitializer,
  UseLocalStore
} from 'easy-peasy';

export function useLocalStore<
  StoreModel extends object = {},
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  InitialData = any,
  StoreConfig extends EasyPeasyConfig<any, any> = any
>(
  model: StoreModel | StoreModelInitializer<StoreModel, InitialData>,
  config?: StoreConfig
): ReturnType<UseLocalStore<StoreModel, InitialData>> {
  return createComponentStore(model, config)();
}
