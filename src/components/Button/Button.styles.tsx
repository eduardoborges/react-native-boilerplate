import styled from 'styled-components/native';
import { colors, fonts } from '~/constants';
import { Props, Button } from './Button.types';

export const Container = styled.TouchableOpacity.attrs({ activeOpacity: 0.8 })<
  Props & Button
>`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: transparent;
  border: 1px solid ${colors.grey};

  ${(p) => p.type === 'primary' && `background: ${colors.primary};`}
`;

export const Text = styled.Text<Props>`
  font-family: ${fonts.primary};
  color: ${colors.primary};
  ${(p) => p.type === 'primary' && `
    color: white;
  `}
`;

export const Spinner = styled.ActivityIndicator<Props>``;
