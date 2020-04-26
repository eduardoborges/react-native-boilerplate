import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Props as OwnProps } from './Input.types';

import { TextInput, Wrapper, LabelInput } from './Input.styles';

type Props = OwnProps & TextInputProps;

const Input: React.FC<Props> = (props) => {
  const { label, onChangeText } = props;
  const [value, setValue] = useState('');
  return (
    <Wrapper {...props}>
      {label && <LabelInput focus={!!value.length} {...props}>{label}</LabelInput>}
      <TextInput
        onChangeText={(v) => {
          if (onChangeText) onChangeText(v);
          setValue(v);
        }}
        {...props}
      />
    </Wrapper>
  );
};

export default Input;
