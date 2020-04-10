import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NavBar from './NavBar';

// test('header text is appearing ', () => {

//     const { getByText } = render(<NavBar />);

//     const headerText = getByText(/Women's World Cup players ranked by search interest/i);
//     expect(headerText).toBeVisible();
    
// })

test('dark mode button can be clicked ', () => {
    const { getByText } = render(<NavBar />);
    
    fireEvent.click(getByText(/dark mode/i));
})
