import styled from 'styled-components/native';
import { Props } from './Label.types';
import { colors, fonts } from '~/constants';

export const Label = styled.Text<Props>`
  color: ${colors.dark};
  font-size: 14px;
  font-family: ${fonts.primary};
  font-weight: 500;
`;
