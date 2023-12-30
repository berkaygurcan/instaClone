import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';
const {width} = Dimensions.get('window');

const SwiperComponent = () => {
  return (
    <Swiper
      dot={<View style={styles.dotStyle} />}
      activeDot={<View style={styles.activeDotStyle} />}
      paginationStyle={styles.paginationStyle}
      loop={false}>
      <View style={styles.slide}>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>

      <View style={styles.slide}>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  // slider
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },

  image: {
    width,
    flex: 1,
  },

  dotStyle: {
    backgroundColor: '#C4C4C4',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },

  activeDotStyle: {
    backgroundColor: '#32B5FF',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  paginationStyle: {
    bottom: -30,
  },
});

export default SwiperComponent;
