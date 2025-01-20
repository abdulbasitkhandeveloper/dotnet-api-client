import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app/layout/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Re Store/i);
  expect(linkElement).toBeInTheDocument();
});
