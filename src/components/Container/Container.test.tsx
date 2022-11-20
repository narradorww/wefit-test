import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Container from '../Container';


test('renders WeMovies on page', () => {
    render(<Container />);
    const linkElement = screen.getByTestId('loader');
    expect(linkElement).toBeInTheDocument();
}
);