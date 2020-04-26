import React from 'react';
import { TextInput, Wrapper } from './Input.styles';
import { Props } from './Input.types';

const Input: React.FC<Props> = () => (
  <Wrapper>
    <TextInput />
  </Wrapper>
);

export default Input;
