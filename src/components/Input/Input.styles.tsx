import styled from 'styled-components/native';
import { colors, fonts } from '~/theme';
import { Props } from './Input.types';

export const Wrapper = styled.View<Props>`
  position: relative;
`;

export const TextInput = styled.TextInput<Props>`
  font-family: ${fonts.primary};

  color: ${colors.dark};
`;
