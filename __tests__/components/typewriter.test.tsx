import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Typewriter from '../components/typewriter';

describe('Typewriter component', () => {
  test('renders correctly with default props', () => {
    render(<Typewriter />);
    expect(screen.getByText('|')).toBeInTheDocument();
  });

  test('renders correctly with custom text', () => {
    const customText = 'Hello, world!';
    render(<Typewriter text={customText} />);
    expect(screen.getByText(customText)).toBeInTheDocument();
  });
});