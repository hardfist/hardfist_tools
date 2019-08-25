import React from 'react';
import { Model } from 'react-model';
import { useUnmount } from 'react-use';
import { Layout } from 'components/layout';

// define model
const Todo = {
  state: {
    items: ['Install react-model', 'Read github docs', 'Build App']
  },
  actions: {
    add: (todo: any) => {
      // s is the readonly version of state
      // you can also return partial state here but don't need to keep immutable manually
      // state is the mutable state
      return (state: any) => {
        console.log('state:', state);
        state.items.push(todo);
      };
    }
  }
};

// Model Register
const { useStore } = Model(Todo);

export const Feed = () => {
  useUnmount(() => {
    console.log('unmount');
  });
  return <TodoList />;
};

const TodoList = () => {
  const [state, actions] = useStore();
  return (
    <Layout>
      <div onClick={() => actions.add('sss')}>Add</div>
      {state.items.map((item, index) => (
        <div key={item}>{item}</div>
      ))}
    </Layout>
  );
};
