import React from 'react';
import styled from 'styled-components';
import { Layout } from 'components/layout';
import { counter } from './model';
import { createComponentStore } from 'easy-peasy';
const useCounter = createComponentStore(counter);
const Row = styled.div``;
export const Counter = () => {
  const [state, actions] = useCounter();
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
