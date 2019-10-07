import React from 'react';
import { LocalCounter, ContextCounter } from 'components/counter';
import { CounterContext } from 'components/counter/hooks';

export const Local = () => {
  return (
    <>
      <CounterContext.Provider>
        <div>
          <ContextCounter />
          <ContextCounter />
          <LocalCounter />
        </div>
      </CounterContext.Provider>
    </>
  );
};
