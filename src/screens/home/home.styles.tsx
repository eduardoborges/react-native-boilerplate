import styled from 'styled-components/native';
import { colors, platform } from '~/constants';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: platform.os === 'ios' ? 'padding' : 'height',
})`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 30px;
  background: ${colors.white};
`;
