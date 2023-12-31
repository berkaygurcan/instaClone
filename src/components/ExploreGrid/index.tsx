import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import VideoPlayer from '../Post/components/VideoPlayer';

const ExploreGrid = ({rowReverse, contents}: any) => {
  return (
    <View style={[styles.container, rowReverse && styles.rowReverse]}>
      <View style={styles.imagesContainer}>
        {/* images */}
        <View style={styles.gap2}>
          <Image
            style={styles.image}
            source={{
              uri: contents[0].url,
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: contents[1].url,
            }}
          />
        </View>
        <View style={styles.gap2}>
          <Image
            style={styles.image}
            source={{
              uri: contents[2].url,
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: contents[3].url,
            }}
          />
        </View>
      </View>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer url={contents[4].url} />
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
