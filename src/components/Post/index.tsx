import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PostHeader from './components/PostHeader';
import BottomBar from './components/BottomBar';
import SwiperComponent from './components/SwiperComponent';

const Post = () => {
  return (
    <>
      <View style={styles.container}>
        <PostHeader />
        <SwiperComponent />
        <BottomBar />
      </View>
      <Text style={styles.likesStyle}>100 likes</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {height: 400},
  likesStyle: {
    marginLeft: 8,
  },
});
export default Post;
