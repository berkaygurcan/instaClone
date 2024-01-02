import React from 'react';
import {render} from '@testing-library/react-native';
import Header from '../../src/components/Header';

it('renders BASIC correctly', () => {
  render(<Header />);
});
