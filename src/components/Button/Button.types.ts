import { TouchableOpacityProps } from 'react-native';

export interface Props {
  type?: 'primary';
  isLoading?: boolean;
  label?: boolean;
}

export type Button = TouchableOpacityProps;
