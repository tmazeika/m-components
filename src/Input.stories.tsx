import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import Input, { InputProps } from './Input';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <Input
      {...args}
      value={value}
      onChange={(value) => {
        args.onChange?.(value);
        setValue(value);
      }}
    />
  );
};

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  label: 'Your Text',
  value: 'Hello, world!',
  disabled: false,
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  label: 'Password',
  value: 'Hello, world!',
  disabled: false,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  type: 'text',
  value: '',
  placeholder: 'First Name',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'text',
  label: 'Your Text',
  value: 'Hello, world!',
  disabled: true,
};
