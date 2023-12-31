import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import VideoPlayer from '../Post/components/VideoPlayer';

const ExploreGrid = ({rowReverse}: any) => {
  return (
    <View style={[styles.container, rowReverse && styles.rowReverse]}>
      <View style={styles.imagesContainer}>
        {/* images */}
        <View style={styles.gap2}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <View style={styles.gap2}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
      </View>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer
          url={
            'https://assets.mixkit.co/videos/preview/mixkit-a-futuristic-robot-slowly-morphs-under-laser-beams-and-ethereal-51519-large.mp4'
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 2,
    marginBottom: 2,
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  imagesContainer: {
    flexDirection: 'row',
    gap: 2,
    flex: 0.82,
  },
  videoPlayerContainer: {
    flex: 0.4,
  },
  gap2: {
    gap: 2,
  },
  image: {width: Dimensions.get('screen').width * 0.33, height: 128},
});
export default ExploreGrid;
