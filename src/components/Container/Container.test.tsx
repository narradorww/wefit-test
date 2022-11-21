import { render, screen } from '@testing-library/react';

import Container from '../Container';


test('should render a container', () => {
    render(<Container />);
    const container = screen.getByTestId('container');
    expect(container).toBeInTheDocument();
})

test('dont should have a Loader if product is true', () => {
    render(<Container/>);
    const linkElement = screen.queryByTestId('loader');
    expect(linkElement).not.toBeInTheDocument();
});

test('should have a Card if product is true', () => {
    render(<Container/>);
    const linkElement = screen.getByTestId('card');
    expect(linkElement).toBeInTheDocument();
})

test('Should make a snapshot of the page', () => {
    const { container } = render(<Container />);
    expect(container).toMatchSnapshot();
})


