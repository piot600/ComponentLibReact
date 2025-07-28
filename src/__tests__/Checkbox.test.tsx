import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from '../Components/Checkbox/Checkbox';
import '@testing-library/jest-dom';

describe('Checkbox component', () => {
  it('renders label', () => {
    render(<Checkbox label="option1" />);
    const checkbox = screen.getByLabelText('option1');
    expect(checkbox).toBeInTheDocument();
  });

  it('with props - id and checked', () => {
    render(
      <Checkbox
        label="Checked"
        id="checkbox-id"
        checked
        onChange={() => {}}
        data-testid="checkbox"
      />,
    );
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeChecked();
    expect(checkbox).toHaveAttribute('id', 'checkbox-id');
  });

  it('click (onChange)', () => {
    const handleChange = jest.fn();
    render(<Checkbox label="click" onChange={handleChange} />);
    const checkbox = screen.getByLabelText('click');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
