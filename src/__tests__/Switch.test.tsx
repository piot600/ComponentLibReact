import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Switch from '../Components/Switch/Switch';
import '@testing-library/jest-dom';

describe('Switch', () => {
  it('checked and disabled', () => {
    render(<Switch checked={true} disabled={true} onChange={() => {}} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    expect(checkbox).toBeDisabled();
  });

  it('toggles checked when clicked', () => {
    function Wrapper() {
      const [checked, setChecked] = React.useState(false);
      return <Switch checked={checked} onChange={() => setChecked(!checked)} />;
    }
    render(<Wrapper />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
