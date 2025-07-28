import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextField from '../Components/TextField/TextField';
import '@testing-library/jest-dom';

describe('TextField', () => {
  it('label and default value', () => {
    render(<TextField label="Name" onChange={() => {}} />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
  });

  it('typing = onChange', () => {
    const handleChange = jest.fn();
    render(<TextField label="Email" onChange={handleChange} />);
    const input = screen.getByLabelText('Email');
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renders error label when error is true', () => {
    render(<TextField label="error" error={true} onChange={() => {}} />);
    expect(screen.getByLabelText('Error')).toBeInTheDocument();
  });
});
