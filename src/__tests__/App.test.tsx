import App from '../App';
import React from 'react';
import { render } from '@testing-library/react';

test('renders learn react link', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});