import { todo } from './todo.model';
import { createStore } from 'easy-peasy';
describe('test todo model', () => {
  it('test addToo', () => {
    const store = createStore(todo);
    const { addTodo, init } = store.getActions();
    init([]);
    addTodo('test');
    expect(store.getState().todo_list.length).toEqual(1);
    expect(store.getState().todo_list[0].text).toEqual('test');
  });
});
