import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'], // Jeśli używasz autodocs w Storybooku
  argTypes: {
    label: {
      description: 'Enter example text',
      control: 'text',
    },
    variant: {
      description: 'Wariant przycisku',
      control: { type: 'radio' },
      options: ['contained', 'outlined', 'text'],
    },
    size: {
      description: 'Rozmiar przycisku',
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    size: 'medium',
    variant: 'contained',
    label: '111',
  },
};

export const Test1: Story = {
  args: {
    size: 'large',
    variant: 'outlined',
    label: '111',
  },
};
