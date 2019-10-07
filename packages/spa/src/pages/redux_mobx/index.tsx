import React, { useState } from 'react';
import { observer, useLocalStore } from 'mobx-react';
import { useLocalStore as useLocalStore2 } from 'utils/model';
import styled from 'styled-components';
import { Action, action, computed, Computed } from 'easy-peasy';
const Todo = styled.li<{ done: boolean }>`
  color: rgba(0, 0, 0, 0.8);
  text-decoration: ${p => (p.done ? 'line-through' : 'none')};
`;
interface ReduxTodoModel {
  todos: Record<string, boolean>;
  pendingTodos: Computed<ReduxTodoModel, string[]>;
  doneTodos: Computed<ReduxTodoModel, string[]>;
  addTodo: Action<ReduxTodoModel, string>;
  toggleTodo: Action<ReduxTodoModel, string>;
}
const todo: ReduxTodoModel = {
  todos: {
    'redux isawesome': true
  },
  pendingTodos: computed(store => {
    return Object.keys(store.todos).filter(todo => store.todos[todo] === false);
  }),
  doneTodos: computed(store => {
    return Object.keys(store.todos).filter(todo => store.todos[todo] === true);
  }),
  addTodo: action((store, text) => {
    store.todos[text] = false;
  }),
  toggleTodo: action((store, todo) => {
    store.todos[todo] = !store.todos[todo];
  })
};
export const TodoListRedux = () => {
  const [{ pendingTodos, doneTodos }, { addTodo, toggleTodo }] = useLocalStore2(
    todo
  );
  return (
    <TodoList
      addTodo={addTodo}
      pendingTodos={pendingTodos}
      doneTodos={doneTodos}
      toggleTodo={toggleTodo}
    />
  );
};
export const TodoListMobx = observer(() => {
  const store = useLocalStore(() => ({
    todos: {
      'mobx is awesome': true
    } as Record<string, boolean>,
    get pendingTodos() {
      return Object.keys(store.todos).filter(
        todo => store.todos[todo] === false
      );
    },
    get doneTodos() {
      return Object.keys(store.todos).filter(
        todo => store.todos[todo] === true
      );
    },
    addTodo: (text: string) => {
      store.todos[text] = false;
    },
    toggleTodo: (todo: string) => {
      store.todos[todo] = !store.todos[todo];
    }
  }));
  return (
    <TodoList
      addTodo={store.addTodo}
      pendingTodos={store.pendingTodos}
      doneTodos={store.doneTodos}
      toggleTodo={store.toggleTodo}
    />
  );
});
function TodoList(props: {
  addTodo: (text: string) => void;
  pendingTodos: string[];
  doneTodos: string[];
  toggleTodo: (todo: string) => void;
}) {
  const [text, setText] = useState('');
  const { toggleTodo, addTodo, pendingTodos, doneTodos } = props;
  const renderTodo = (done: boolean) => (todo: string) => (
    <Todo key={todo} done={done} onClick={() => toggleTodo(todo)}>
      {todo}
    </Todo>
  );
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addTodo(text);
        setText('');
      }}
    >
      {pendingTodos.map(renderTodo(false))}
      {doneTodos.map(renderTodo(true))}
      <br />
      <input value={text} onChange={e => setText(e.target.value)} />
      <button>Add todo</button>
    </form>
  );
}

export const TodoListWrapper = () => {
  return (
    <>
      <TodoListMobx />
      <TodoListRedux />
    </>
  );
};
