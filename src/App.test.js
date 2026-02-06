// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders smartAurora title', () => {
    render(<App />);
    const titleElement = screen.getByText(/smartAurora/i);
    expect(titleElement).toBeInTheDocument();
});
