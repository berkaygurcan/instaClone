import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Header from '../../../components/Header';
import Post from '../../../components/Post';

export type PostDataType = {
  id: number;
  name: string;
  profilePicUrl: string;
  content: string[];
  contentType: 'img' | 'video';
  likeCount: number;
};
const Home = () => {
  const mockPostData: PostDataType[] = [
    {
      id: 1,
      name: 'klarie',
      profilePicUrl:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: [
        'https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/16817504/pexels-photo-16817504/free-photo-of-deniz-siyah-ve-beyaz-kadin-ayakta.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
      contentType: 'img',
      likeCount: 10,
    },
    {
      id: 2,
      name: 'berkay',
      profilePicUrl:
        'https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: [
        'https://images.pexels.com/photos/19578087/pexels-photo-19578087/free-photo-of-peyzaj-daglar-gol-yansima.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/19572849/pexels-photo-19572849/free-photo-of-evcil-hayvan-oturmak-ust-yuksek.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      contentType: 'img',
      likeCount: 10,
    },
    {
      id: 3,
      name: 'sewa',
      profilePicUrl:
        'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: [
        'https://player.vimeo.com/video/881659498?title=0&portrait=0&byline=0&autoplay=1&muted=true',
      ],
      contentType: 'video',
      likeCount: 10,
    },
  ];

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
