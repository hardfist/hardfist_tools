import React, { useEffect } from 'react';
import { useMount } from 'react-use';
import styled, { keyframes } from 'styled-components';
import { Layout } from 'components/layout';
import { useLocalStore } from 'utils/model';
import { get_todo_list } from 'service/app';
import { ReactComponent as LogoIcon } from 'assets/logo.svg';
import { useState } from 'react';
import { useIntervalCount } from 'utils/hooks';
import { todo as todoModel } from './todo.model';
import { counter as counterModel } from './counter.model';
const AppWrapper = styled.div`
  text-align: center;
`;
const AppHeader = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const app_logo_spin = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Text = styled.div`
  color: red;
  font-size: 24px;
`;
const Logo = styled(LogoIcon)`
  animation: ${app_logo_spin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

const FilterLink = styled.button`
  color: #61dafb;
  margin-left: 4px;
`;
const Item = styled.li<{ completed: boolean }>`
  color: rgba(0, 0, 0, 0.8);
  text-decoration: ${p => (p.completed ? 'line-through' : 'none')};
`;

export const TodoList: React.FC = () => {
  const [input, setInput] = useState('');
  const count = useIntervalCount(1000);
  const [
    { visible_todo, filter },
    { addTodo, setFilter, toggleTodo, fetchTodo }
  ] = useLocalStore(todoModel, {
    injections: {
      get_todo_list
    }
  });
  const [{ counter }, { startCounter, stopCounter }] = useLocalStore(
    counterModel
  );
  // const { visible_todo, filter } = useStoreState(state => {
  //   return {
  //     ...state.todo
  //   };
  // });
  // const { addTodo, setFilter, toggleTodo, fetchTodo } = useStoreActions(
  //   actions => {
  //     return {
  //       ...actions.todo
  //     };
  //   }
  // );
  useMount(() => {
    startCounter();
  });
  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);
  return (
    <>
      <Layout>
        <AppWrapper>
          <AppHeader>
            <Logo />
            <Text onClick={() => stopCounter()}>timer ellapsed: {counter}</Text>
            <Text>{count}</Text>
            <form
              onSubmit={e => {
                e.preventDefault();
                if (!input.trim()) {
                  return;
                }
                setInput('');
                addTodo(input);
              }}
            >
              <input
                value={input}
                onChange={e => {
                  setInput(e.target.value);
                }}
              />
              <button type="submit">Add Todo</button>
            </form>
            <ul>
              {visible_todo.map(x => {
                return (
                  <Item
                    key={x.id}
                    onClick={() => toggleTodo(x.id)}
                    completed={x.completed}
                  >
                    {x.text}
                  </Item>
                );
              })}
            </ul>
            <div>
              <span>Show: </span>
              <FilterLink
                disabled={filter === 'SHOW_ALL'}
                onClick={() => setFilter('SHOW_ALL')}
              >
                All
              </FilterLink>
              <FilterLink
                disabled={filter === 'SHOW_ACTIVE'}
                onClick={() => setFilter('SHOW_ACTIVE')}
              >
                Active
              </FilterLink>
              <FilterLink
                disabled={filter === 'SHOW_COMPLETED'}
                onClick={() => setFilter('SHOW_COMPLETED')}
              >
                Completed
              </FilterLink>
            </div>
          </AppHeader>
        </AppWrapper>
      </Layout>
    </>
  );
};
