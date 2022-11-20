import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Loader from '../Loader';


test('should have a loader test-id', () => {
    render(<Loader />);
    const linkElement = screen.getByTestId('loader');
    expect(linkElement).toBeInTheDocument();
}
);