import { Action, action, thunk, computed, Thunk, Computed } from 'easy-peasy';
import { Injections } from 'store';
type Item = {
  id: number;
  text: string;
  completed: boolean;
};
type FILTER_TYPE = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';
const delay = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });
export interface TodosModel {
  todo_list: Item[];
  filter: FILTER_TYPE;
  init: Action<TodosModel, Item[]>;
  addTodo: Action<TodosModel, string>;
  setFilter: Action<TodosModel, FILTER_TYPE>;
  toggleTodo: Action<TodosModel, number>;
  addTodoAsync: Thunk<TodosModel, string>;
  fetchTodo: Thunk<TodosModel, undefined, Injections>;
  visible_todo: Computed<TodosModel, Item[]>;
}
let nextTodoId = 0;
export const todo: TodosModel = {
  todo_list: [
    {
      text: 'learn easy',
      id: nextTodoId++,
      completed: false
    }
  ],
  filter: 'SHOW_ALL' as FILTER_TYPE,
  init: action((state, init) => {
    state.todo_list.push(...init);
  }),
  addTodo: action((state, text) => {
    state.todo_list.push({
      text,
      id: nextTodoId++,
      completed: false
    });
  }),
  setFilter: action((state, filter) => {
    state.filter = filter;
  }),
  toggleTodo: action((state, id) => {
    const item = state.todo_list.filter(x => x.id === id)[0];
    item.completed = !item.completed;
  }),
  addTodoAsync: thunk(async (actions, text) => {
    await delay(1000);
    actions.addTodo(text);
  }),
  fetchTodo: thunk(async function test(actions, payload, { injections }) {
    const { get_todo_list } = injections;
    const {
      data: { todo_list }
    } = await get_todo_list();
    actions.init(todo_list);
  }),
  visible_todo: computed(({ todo_list, filter }) => {
    return todo_list.filter(x => {
      if (filter === 'SHOW_ALL') {
        return true;
      } else if (filter === 'SHOW_COMPLETED') {
        return x.completed;
      } else {
        return !x.completed;
      }
    });
  })
};
