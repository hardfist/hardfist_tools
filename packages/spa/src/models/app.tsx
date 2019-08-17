import { RootDispatch, RootState } from 'store';
import { get_todo_list } from 'service/app';
import { delay } from 'utils';
let nextTodoId = 0;
type FILTER_TYPE = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';
type Item = {
  id: number;
  text: string;
  completed: boolean;
};
const initialState = {
  todo_list: [] as Item[],
  filter: 'SHOW_ALL' as FILTER_TYPE
};
export type appState = typeof initialState;

export const app = {
  state: initialState,
  reducers: {
    init(state: appState, init: Item[]) {
      state.todo_list.push(...init);
    },
    addTodo(state: appState, text: string) {
      state.todo_list.push({
        id: nextTodoId++,
        text,
        completed: false
      });
    },
    setFilter(state: appState, filter: FILTER_TYPE) {
      state.filter = filter;
    },
    toggleTodo(state: appState, id: number) {
      const item = state.todo_list.filter(x => x.id === id)[0];
      item.completed = !item.completed;
    }
  },
  effects: (dispatch: RootDispatch) => ({
    async addTodoAsync(text: string) {
      await delay(1000);
      await dispatch.app.addTodo(text);
    },
    async fetchTodo() {
      const {
        data: { todo_list }
      } = await get_todo_list();
      dispatch.app.init(todo_list);
    }
  }),
  selectors: () => ({
    visible_todo() {
      return ({ app: { filter, todo_list } }: RootState) => {
        return todo_list.filter(x => {
          if (filter === 'SHOW_ALL') {
            return true;
          } else if (filter === 'SHOW_COMPLETED') {
            return x.completed;
          } else {
            return !x.completed;
          }
        });
      };
    }
  })
};
