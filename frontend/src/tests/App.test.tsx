import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders table of actors', () => {
  render(<App />);
  const linkElement = screen.getByText(/Actors/i);
  expect(linkElement).toBeInTheDocument();
});
