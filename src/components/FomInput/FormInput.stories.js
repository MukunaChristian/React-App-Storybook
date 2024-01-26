// YourFormInput.stories.js
import React from 'react';
import Form from './FormInput';

const defaultProps = {
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  inputValue: '',
  setInputValue: () => {},
  
};

export default {
  title: 'components/FormInput',
};

export const WithCustomProps = () => (
    <Form {...defaultProps} />
);
