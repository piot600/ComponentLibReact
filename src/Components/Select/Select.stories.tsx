import { Meta, StoryObj } from '@storybook/react/*';
import Select from './Select';
import React, { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Test1: Story = {
  name: 'Simple test (without change value)',
  args: {
    label: 'Age',
  },
  render: (args) => (
    <Select {...args} value="" onChange={() => {}}>
      <option value="1">Ten</option>
      <option value="2">Twenty</option>
      <option value="3">Thirty</option>
    </Select>
  ),
};

export const Test2: Story = {
  name: 'Selected value Test',
  args: {
    label: 'AgeS',
    name: 'ageS',
    value: 'DAS',
  },
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Select
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="1">Ten</option>
          <option value="2">Twentysaddasasdadsadsdssdadasasddasads</option>
          <option value="3">Thirty</option>
        </Select>
        <Select
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="1">Ten</option>
          <option value="2">Twentysaddasasdadsadsdssdadasasddasads</option>
          <option value="3">Thirty</option>
        </Select>
      </div>
    );
  },
};
