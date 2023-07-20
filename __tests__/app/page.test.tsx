import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../app/page';

describe('Home page', () => {
  test('renders correctly', () => {
    render(<Home />);
    expect(screen.getByText('CodeStory')).toBeInTheDocument();
  });
});