import React from 'react';
import {render} from '@testing-library/react-native';
import Post from '../../src/components/Post';

it('renders BASIC correctly', () => {
  const testItem = {
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
  };
  render(<Post item={testItem} />);
});
