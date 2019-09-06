import React from 'react';
import ReactDOM from 'react-dom';
import { render, test } from '@testing-library/react';
import { App, sum } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// const test = require('./App');

describe('sum function', () => {
  it('sums two integers', () => {
    expect(sum(2, 2)).toBe(4);
    expect(sum(2, 3)).toBe(5);
  });
});

test('Contains Dark Mode Button', () => {
  // Arrange
  const { getByTestId } = render(<App />);
  // Act - getting the node by text
  getByTestId(/dark-mode_toggle/i);
  // Assertion is if ^^^ is truthy
});

