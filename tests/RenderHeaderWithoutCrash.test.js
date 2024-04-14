import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from '../src/components/common/Header'

// Teste para verificar se o carrinho está fechado inicialmente
test('o carrinho está fechado inicialmente', () => {
    render(<Header />)
    const cartElement = screen.queryByTestId('cart')
    expect(cartElement).not.toBeInTheDocument()
})
