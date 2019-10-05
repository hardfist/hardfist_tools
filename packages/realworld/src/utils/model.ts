import {
  createComponentStore,
  EasyPeasyConfig,
  StoreModelInitializer,
  UseLocalStore
} from 'easy-peasy';

export function useLocalStore<
  StoreModel extends object = {},
  InitialData = any,
  StoreConfig extends EasyPeasyConfig<any, any> = any
>(
  model: StoreModel | StoreModelInitializer<StoreModel, InitialData>,
  config?: StoreConfig
): ReturnType<UseLocalStore<StoreModel, InitialData>> {
  return createComponentStore(model, config)();
}
