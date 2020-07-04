import styled from 'styled-components/native';
import Input from 'react-native-text-input-mask';
import { fonts, colors, padding } from '~/constants';

const height = 50;

export const InputText = styled(Input)`
  font-family: ${fonts.primary};
  border: 1px solid ${colors.grey};
  height: ${height}px;
  border-radius: 3px;
  padding: 0 ${padding.md}px;
`;
