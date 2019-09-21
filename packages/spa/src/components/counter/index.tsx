import React from 'react';
import styled from 'styled-components';
import { Layout } from 'components/layout';
import {
  useReduxCounter,
  useLocalCounter,
  useContextCounter,
  CounterActions,
  CounterState
} from './hooks';
const Row = styled.div``;
const renderCounter = (state: CounterState, actions: CounterActions) => {
  return (
    <Layout>
      <Row
        onClick={() => {
          actions.inc(1);
        }}
      >
        add
      </Row>
      <Row
        onClick={() => {
          actions.async_inc(1);
        }}
      >
        add_async
      </Row>
      <Row>
        count:{state.count} : {state.double_count}: {state.quodra_count}
      </Row>
    </Layout>
  );
};
export const ContextCounter = () => {
  const [state, actions] = useContextCounter();
  return renderCounter(state, actions);
};
export const LocalCounter = () => {
  const [state, actions] = useLocalCounter();
  return renderCounter(state, actions);
};
export const ReduxCounter = () => {
  const [state, actions] = useReduxCounter();
  console.log('state,', state, actions);
  return renderCounter(state, actions);
};
