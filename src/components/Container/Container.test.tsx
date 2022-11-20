import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Container from '../Container';


test('should render a container', () => {
    render(<Container response={true} />);
    const container = screen.getByTestId('container');
    expect(container).toBeInTheDocument();
})

test('dont should have a Loader if response is true', () => {
    render(<Container response={true} />);
    const linkElement = screen.queryByTestId('loader');
    expect(linkElement).not.toBeInTheDocument();
});


