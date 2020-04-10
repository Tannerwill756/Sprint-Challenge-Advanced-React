import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NavBar from './NavBar';
import { getByTestId }from '@testing-library/jest-dom/matchers'

test('header text is appearing ', () => {

    const navbar = getByTestId('navbar');
    const mainTitle = getByTestId('mainTitle');

    expect(navbar).toContainElement(mainTitle);

    
})

test('header text is appearing ', () => {
    const { getByText } = render(<NavBar />);
    
    fireEvent.click(getByText(/dark mode/i));
})
