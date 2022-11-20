import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Card from '../Card';

const mockCart = {
    id: 1,
    title: 'Viúva Negra',
    price: 9.99,
    image: 'https://www.imagemhost.com.br/images/2022/07/10/viuva-negra.png',
    addToCart: () => {},
}

test('should render a Card', () => {
    render(<Card id={mockCart.id} title ={mockCart.title} price={mockCart.price} image={mockCart.image} addToCart={mockCart.addToCart}/>);
    const linkElement = screen.getByTestId('card');
    expect(linkElement).toBeInTheDocument();
})

test('should render a image', () => {
    render(<Card id={mockCart.id} title ={mockCart.title} price={mockCart.price} image={mockCart.image} addToCart={mockCart.addToCart}/>);
    const linkElement = screen.getByTestId('image');
    expect(linkElement).toBeInTheDocument();
});

test('should render a title', () => {
    render(<Card id={mockCart.id} title ={mockCart.title} price={mockCart.price} image={mockCart.image} addToCart={mockCart.addToCart}/>);
    const linkElement = screen.getByTestId('title');
    expect(linkElement).toBeInTheDocument();
});

test('should render a price', () => {
    render(<Card id={mockCart.id} title ={mockCart.title} price={mockCart.price} image={mockCart.image} addToCart={mockCart.addToCart}/>);
    const linkElement = screen.getByTestId('price');
    expect(linkElement).toBeInTheDocument();
});

test('should render a button', () => {
    render(<Card id={mockCart.id} title ={mockCart.title} price={mockCart.price} image={mockCart.image} addToCart={mockCart.addToCart}/>);
    const linkElement = screen.getByTestId('button');
    expect(linkElement).toBeInTheDocument();
});