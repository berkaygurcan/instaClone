import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PostHeader from './components/PostHeader';
import BottomBar from './components/BottomBar';
import SwiperComponent from './components/SwiperComponent';

const Post = ({item}: any) => {
  return (
    <>
      <View style={styles.container}>
        <PostHeader name={item.name} ppUrl={item.profilePicUrl} />
        <SwiperComponent content={item.content} />
        <BottomBar />
      </View>
      <Text style={styles.likesStyle}>{item.likeCount} likes</Text>
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
