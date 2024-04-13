import React from 'react'
import { render } from '@testing-library/react'
import Header from '../../components/common/Header'

test('renders Header component without crashing', () => {
    render(<Header />);
})
