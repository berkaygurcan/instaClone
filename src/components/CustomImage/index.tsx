import React from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  Dimensions,
  ViewStyle,
  ImageSourcePropType,
  ImageResizeMode,
} from 'react-native';

interface CustomImageProps {
  source: ImageSourcePropType | undefined;
  style?: ImageStyle | ViewStyle;
  resizeMode?: ImageResizeMode | undefined;
}

const CustomImage: React.FC<CustomImageProps> = ({
  source,
  style,
  resizeMode,
}) => {
  return (
    <Image
      testID="custom-image"
      style={[styles.image, style]}
      source={source}
      resizeMode={resizeMode} // resizeMode prop'u burada doğrudan kullanıldı
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('screen').width * 0.33,
    height: 128,
  },
});

export default CustomImage;
