import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';


test('renders WeMovies on page', () => {
    render(<Header />);
    const linkElement = screen.getByText(/WeMovies/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Meu Carrinho on page', () => {
    render(<Header />);
    const linkElement = screen.getByText(/Meu Carrinho/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders 0 itens on page', () => {
    render(<Header />);
    const linkElement = screen.getByText(/0 itens/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders basket icon on page', () => {
    render(<Header />);
    const linkElement = screen.getByAltText(/Icone de Cesta para Representar as Compras no Site/i);
    expect(linkElement).toBeInTheDocument();

});