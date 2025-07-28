import { Meta, StoryObj } from '@storybook/react/*';
import Switch from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      description: 'set checked',
      control: 'boolean',
    },
    disabled: {
      description: 'set disabled',
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Test1: Story = {
  name: 'Style test(without value)',
  args: {},
};

export const Test2: Story = {
  args: {
    checked: true,
  },
};
