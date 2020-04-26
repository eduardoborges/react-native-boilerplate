import styled from 'styled-components/native';
import { colors, fonts, padding } from '~/constants';
import { Props } from './Input.types';
import { Label } from '~/components/Label/Label.styles';

const height = 50;

export const Wrapper = styled.View<Props>`
  position: relative;
  border: 1px solid ${colors.grey};
  height: ${height}px;
  border-radius: 3px;

  ${(p) => p.type === 'outline' && `
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
  `}
`;

export const LabelInput = styled<typeof Label & Props & { focus?: boolean }>(Label)`
  color: ${colors.primary};
  position: absolute;
  bottom: ${height + 5}px;

  ${(p) => p.type === 'outline' && `
    bottom: ${height / 2 - 16 / 2}px;
    color: ${colors.greyDark};
    font-weight: 400;
    ${p.focus && `
      color: ${colors.primary};
      font-weight: 500;
      bottom: ${height}px;
    `}
  `}
`;

export const TextInput = styled.TextInput.attrs({ placeholderTextColor: colors.greyDark })<Props>`
  font-family: ${fonts.primary};
  font-size: ${fonts.body}px;
  color: ${colors.dark};
  height: 100%;
  padding: 0px ${padding.md}px;

  ${(p) => p.type === 'outline' && `
    padding: 5px 0px;
  `}
`;
