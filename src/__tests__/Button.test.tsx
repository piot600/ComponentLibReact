import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Components/Button/Button';
import '@testing-library/jest-dom';

describe('Button component', () => {
  it('renders label', () => {
    render(<Button label="Test" />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Test');
  });

  it('default size and variant', () => {
    render(<Button label="Test" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button', 'button--medium', 'button--contained');
  });

  it('applies custom size and variant classes', () => {
    render(<Button label="Custom" size="large" variant="outlined" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button', 'button--large', 'button--outlined');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Clickable" onClick={handleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
