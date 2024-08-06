import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from './dashboard';

describe('<dashboard />', () => {
  test('it should mount', () => {
    render(<Dashboard />);

    const dashboard = screen.getByTestId('dashboard');

    expect(dashboard).toBeInTheDocument();
  });
});