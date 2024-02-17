import React from 'react';
import { TextInput as RNTextInput } from 'react-native';

const TextInput = ({ placeholder, ...props }) => {
  return (
    <RNTextInput placeholder={placeholder} {...props} />
  );
};

export default TextInput;
