import React from 'react';
import '@testing-library/react/cleanup-after-each';
import ReactDOM from 'react-dom';
import { App, sum } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


