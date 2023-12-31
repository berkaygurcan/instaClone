import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Header from '../../../components/Header';
import Post from '../../../components/Post';
import {PostDataType, mockPostData} from '../../../config/mockData';

const Home = () => {
  const renderItem = ({item}: {item: PostDataType}) => {
    return <Post item={item} />;
  };
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={mockPostData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
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
