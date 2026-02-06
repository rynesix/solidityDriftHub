// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders solidityDrift title', () => {
    render(<App />);
    const titleElement = screen.getByText(/solidityDrift/i);
    expect(titleElement).toBeInTheDocument();
});
