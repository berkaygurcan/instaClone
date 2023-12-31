import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = ({url}: any) => {
  const videoRef = useRef(null);

  return (
    <View style={styles.video}>
      <Video
        playInBackground={false}
        ref={videoRef}
        resizeMode="stretch"
        source={{
          uri: url,
        }}
        repeat
        controls={false}
        style={styles.backgroundVideo}
      />
    </View>
  );
};

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  video: {
    flex: 1,
    width: '100%',
  },
});
export default VideoPlayer;
