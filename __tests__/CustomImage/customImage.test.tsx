import React from 'react';
import {render, screen} from '@testing-library/react-native';
import CustomImage from '../../src/components/CustomImage';

it('renders BASIC correctly', () => {
  render(
    <CustomImage
      source={{
        uri: 'https://images.pexels.com/photos/12315546/pexels-photo-12315546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      }}
    />,
  );
});

it('has a true container style ', () => {
  render(
    <CustomImage
      source={{
        uri: 'https://images.pexels.com/photos/12315546/pexels-photo-12315546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      }}
      style={{marginTop: 10}}
    />,
  );
  const customImg = screen.getByTestId('custom-image');
  const {style} = customImg.props;

  expect(style).toEqual([{height: 128, width: 247.5}, {marginTop: 10}]);
});
