import { thunk, Thunk, action, Action } from 'easy-peasy';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
interface CounterModel {
  counter: number;
  startCounter: Thunk<CounterModel>;
  stopCounter: Thunk<CounterModel>;
  incrementCounter: Action<CounterModel>;
  resetCounter: Action<CounterModel>;
}
const unsubscribe$ = new Subject();
const everySecond$ = timer(0, 1000).pipe(takeUntil(unsubscribe$));

export const counter: CounterModel = {
  counter: 0,
  startCounter: thunk(actions => {
    everySecond$.subscribe(actions.incrementCounter as any);
  }),
  stopCounter: thunk(() => {
    unsubscribe$.next();
  }),

  incrementCounter: action(state => {
    state.counter++;
  }),

  resetCounter: action(state => {
    state.counter = 0;
  })
};
