import { Dimensions, Platform } from 'react-native';
import { darken } from 'polished';


export const familyPrimary = '';

export const platform = {
  os: Platform.OS,
};

const greyBase = '#cac5bf7a';

export const colors = {
  primary: '#06D',
  grey: darken(0, greyBase),
  greyDark: darken(50, greyBase),
  dark: '#222',
  white: '#FAFAFA',
};

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

export const fonts = {
  primary: 'Proxima Nova',
  body: 14,
  sm: 12,
  md: 18,
  lg: 28,
};
