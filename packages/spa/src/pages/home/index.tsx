import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootDispatch, RootState, select, RootSelect } from 'store';
import styled, { keyframes } from 'styled-components';
import { Layout } from 'components/layout';
import { ReactComponent as LogoIcon } from 'assets/logo.svg';
import { useState } from 'react';
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
const selection = select((model: RootSelect) => {
  return {
    visible_todo: model.app.visible_todo
  };
});
export const Home: React.FC = () => {
  const [input, setInput] = useState('');
  const { visible_todo, filter } = useSelector((state: RootState) => {
    return { ...state.app, ...selection(state) };
  });
  const {
    app: { addTodo, setFilter, toggleTodo }
  } = useDispatch() as RootDispatch;
  return (
    <>
      <Layout>
        <AppWrapper>
          <AppHeader>
            <Logo />
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
