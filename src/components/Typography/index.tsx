import {Text} from 'react-native';
import React, {FC} from 'react';
import {TypographyType} from './types';

const Typography: FC<TypographyType> = props => {
  const {color, text, style, ...textProps} = props;

  const styleObject = {
    color,
    ...style,
  };

  return (
    <Text {...textProps} style={styleObject}>
      {text}
    </Text>
  );
};
export default Typography;
