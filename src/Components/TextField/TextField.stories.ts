import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    error: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Test1: Story = {
  name: 'Style test(without value)',
  args: {
    label: 'Name',
    error: false,
  },
};

export const Test2: Story = {
  name: 'Style test(with value)',
  args: {
    label: 'Adress',
    value: 'Warsaw 22A',
    error: false,
  },
};

export const ErrorBoolean: Story = {
  name: 'Error as boolean',
  args: {
    label: 'Street',
    error: true,
  },
};

export const ErrorFunction: Story = {
  name: 'Error as valid function',
  args: {
    label: 'Login',
    value: 'hello',
    error: () => true,
  },
};

export const NoError: Story = {
  name: 'No error',
  args: {
    label: 'Email',
    error: false,
  },
};

export const withPlaceholder: Story = {
  name: 'with placeholder',
  args: {
    label: 'name',
    placeholder: 'testowy',
  },
};
