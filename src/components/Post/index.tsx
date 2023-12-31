import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PostHeader from './components/PostHeader';
import BottomBar from './components/BottomBar';
import SwiperComponent from './components/SwiperComponent';
import VideoPlayer from './components/VideoPlayer';

const Post = ({item}: any) => {
  return (
    <>
      <View style={styles.container}>
        <PostHeader name={item.name} ppUrl={item.profilePicUrl} />
        {item.contentType === 'video' ? (
          <VideoPlayer url={item.content[0]} />
        ) : (
          <SwiperComponent content={item.content} />
        )}
        <BottomBar />
        <Text style={styles.likesStyle}>{item.likeCount} likes</Text>
      </View>
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
