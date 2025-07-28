import { Meta, StoryObj } from '@storybook/react/*';
import Checkbox from './Checkbox';
import React from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Enter example text',
      control: 'text',
    },
    checked: {
      description: 'is checked',
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Test1: Story = {
  name: 'Single checkbox',
  args: {
    label: 'Age',
  },
};

export const Test2: Story = {
  name: 'Single checkbox disabled',
  args: {
    label: 'Option',
    disabled: true,
  },
};

export const Test3: Story = {
  name: 'Checkbox group',
  render: () => {
    return (
      <fieldset>
        <legend>Choose option:</legend>
        <Checkbox label="option 1"></Checkbox>
        <Checkbox label="option 2"></Checkbox>
        <Checkbox label="option 3"></Checkbox>
        <Checkbox label="option 4"></Checkbox>
        <Checkbox label="option 5"></Checkbox>
      </fieldset>
    );
  },
};
