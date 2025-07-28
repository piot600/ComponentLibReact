import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../Components/Modal/Modal';
import '@testing-library/jest-dom';

describe('Modal component', () => {
  it('open=false (no render)', () => {
    const { container } = render(
      <Modal open={false} onClose={() => {}}>
        <p>Modal test</p>
      </Modal>,
    );
    expect(container.firstChild).toBeNull();
  });

  it('open=true (modal exists)', () => {
    render(
      <Modal open={true} onClose={() => {}}>
        <p>Modal test</p>
      </Modal>,
    );
    expect(screen.getByText('Modal test')).toBeInTheDocument();
  });

  it('click backdrop = calls onClose', () => {
    const handleClose = jest.fn();
    render(
      <Modal open={true} onClose={handleClose}>
        <p>Dialog window</p>
      </Modal>,
    );
    const inner = screen.getByText('Dialog window');
    const dialog = inner.parentElement;
    const backdrop = dialog?.parentElement;
    expect(backdrop).not.toBeNull();
    fireEvent.click(backdrop as HTMLElement);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('click modal dialog = not call onClose', () => {
    const handleClose = jest.fn();
    render(
      <Modal open={true} onClose={handleClose}>
        <p>Dialog window</p>
      </Modal>,
    );
    const dialog = screen.getByText('Dialog window').parentElement!;
    fireEvent.click(dialog);
    expect(handleClose).not.toHaveBeenCalled();
  });
});
