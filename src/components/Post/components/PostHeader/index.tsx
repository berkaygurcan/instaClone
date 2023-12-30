import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const PostHeader = () => {
  return (
    <View style={styles.postHeaderContainer}>
      <View style={styles.avatarInfo}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text>Ruffles</Text>
      </View>
      <Image
        style={styles.ellipsis}
        source={require('../../../../common/assets/icons/ellipsis.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {height: 400},
  postHeaderContainer: {
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 12,
    paddingVertical: 7,
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  avatarInfo: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ellipsis: {
    paddingHorizontal: 5,
    height: 24,
    width: 24,
  },
  contentImage: {
    width: 400,
    height: 400,
  },
});

export default PostHeader;
