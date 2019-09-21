import { action, Action, thunk, Thunk, computed, Computed } from 'easy-peasy';
import { delay } from 'utils/delay';
interface CounterModel {
  count: number;
  inc: Action<CounterModel, number>;
  async_inc: Thunk<CounterModel, number>;
  double_count: Computed<CounterModel, number>;
  quodra_count: Computed<CounterModel, number>;
}
export const counter: CounterModel = {
  count: 1,
  inc: action((state, cnt) => {
    console.log('newState:', state, state.count);
    state.count += cnt;
  }),
  async_inc: thunk(async (actions, cnt) => {
    await delay(1000);
    actions.inc(cnt);
  }),
  double_count: computed(state => state.count * 2),
  quodra_count: computed(state => state.double_count * 2)
};
