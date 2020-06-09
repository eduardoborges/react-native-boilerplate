import styled from 'styled-components/native';
import { colors, platform, dimensions } from '~/constants';

interface SlideProps {
  color: string;
}

interface SlideProps {
  color: string;
}

export const Slider = styled.ScrollView`
  height: ${dimensions.fullHeight}px;
  background: red;
  flex:1;
  display: flex;
`;

export const Slide = styled.View<SlideProps>`
  width: ${dimensions.fullWidth}px;
  height: 100%;
  background: ${(p) => p.color};
`;

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
