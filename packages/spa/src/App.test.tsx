import React from 'react';
import ReactDOM from 'react-dom';
import { store } from 'store';
import { App } from './App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store as any}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
