import styled from 'styled-components/native';
import { colors, platform, fonts } from '~/constants';


export const Wrapper = styled.KeyboardAvoidingView`
`;

export const Container = styled.SafeAreaView`
  flex:1;
  display: flex;
  padding: 0 20px;
  margin: 0 20px;
  justify-content: space-between;
  height: 100%;
`;


export const Header = styled.View`
  flex: 0.33;
  justify-content: center;
  /* background:  green; */
`;


export const Footer = styled.View`
  flex: 0.33;
  justify-content: space-around;
  /* background:  red; */
`;

export const Title = styled.Text`
 font-size: 50px;
 font-family: ${fonts.primary};
 font-weight: 500;
`;

export const Subtitle = styled.Text`
 font-family: ${fonts.primary};
 font-size: 20px;
`;
