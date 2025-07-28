import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    onClose: { action: 'onClose' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ControlledModal: Story = {
  name: 'Controlled Modal with button',
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <Modal {...args} open={open} onClose={() => setOpen(false)}>
          <h2>Modal Title</h2>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </Modal>
      </>
    );
  },
};
