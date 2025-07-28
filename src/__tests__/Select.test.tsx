import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from '../Components/Select/Select';
import '@testing-library/jest-dom';

describe('Select', () => {
  it('label and options', () => {
    render(
      <Select label="Choose option" value="option1" onChange={() => {}}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>,
    );
    const componentSelect = screen.getByLabelText('Choose option');
    expect(componentSelect).toBeInTheDocument();
    const selected = componentSelect as HTMLSelectElement;
    expect(selected.value).toBe('option1');
  });

  it('select event - onChange ', () => {
    const handleChange = jest.fn();
    render(
      <Select label="Select" value="" onChange={handleChange}>
        <option value="one">One</option>
        <option value="two">Two</option>
      </Select>,
    );
    const select = screen.getByLabelText('Select') as HTMLSelectElement;
    fireEvent.change(select, { target: { value: 'two' } });
    expect(handleChange).toHaveBeenCalled();
  });
});
