import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../../components/Header';
import Post from '../../../components/Post';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Post />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Home;
