import React from 'react';
import { observer, useLocalStore } from 'mobx-react-lite';
import './App.css';
const createTodos = (initialTodos: string[]) => {
  const todos: {
    [key: string]: boolean;
  } = {};
  for (const x of initialTodos) {
    todos[x] = false;
  }
  return todos;
};
const Todo = (props: {
  done: boolean;
  text: string;
  onToggle: (text: string) => void;
}) => {
  return <div onClick={() => props.onToggle(props.text)}>{props.text}</div>;
};
export default observer<{ initialTodos: string[] }>(({ initialTodos }) => {
  const todoRef = React.useRef<HTMLInputElement>(null);
  const store = useLocalStore(() => ({
    todos: createTodos(initialTodos) as Record<string, boolean>,
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
    addTodo: () => {
      if (todoRef.current) {
        store.todos[todoRef.current.value] = false;
        todoRef.current.value = '';
      }
    },
    toggleTodo: (todo: string) => {
      store.todos[todo] = !store.todos[todo];
    }
  }));

  const renderTodo = (done: boolean) => (todo: string) => (
    <Todo key={todo} done={done} text={todo} onToggle={store.toggleTodo} />
  );

  return (
    <form onSubmit={store.addTodo}>
      {store.pendingTodos.map(renderTodo(false))}
      {store.doneTodos.map(renderTodo(true))}
      <br />
      <input ref={todoRef} />
      <button>Add todo</button>
    </form>
  );
});
