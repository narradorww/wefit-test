import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders WeMovies on page', () => {
  render(<App />);
  const linkElement = screen.getByText(/WeMovies/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Meu Carrinho on page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Meu Carrinho/i);
  expect(linkElement).toBeInTheDocument();
});

test('render a snapshot of the page', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
})

