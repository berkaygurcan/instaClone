import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Typography from '../../src/components/Typography';

it('renders BASIC correctly', () => {
  render(<Typography text={''} />);
});

it('renders with title prop correctly', () => {
  render(<Typography text={'test'} />);
  const titleElement = screen.getByText('test');
  expect(titleElement).toBeTruthy();
});
