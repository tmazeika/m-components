import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) =>
  <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  disabled: false,
  children: 'Submit',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  disabled: false,
  children: 'Submit',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  disabled: true,
  children: 'Submitting...',
};
