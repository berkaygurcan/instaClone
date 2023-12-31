import {TextProps} from 'react-native';

export interface TypographyType extends TextProps {
  color?: string;
  text: string;
  style?: object;
}
