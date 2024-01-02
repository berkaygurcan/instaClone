import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import CustomTextInput from '../../src/components/CustomTextInput';

it('renders BASIC correctly', () => {
  render(<CustomTextInput value={''} onChangeText={function (): void {}} />);
});

it('textInput onChangeText run correnctly', () => {
  let x = 'test';
  render(
    <CustomTextInput
      onChangeText={val => {
        x += val;
      }}
      value={x}
    />,
  );
  const textinputTouchble = screen.getByTestId('textInput');
  fireEvent.changeText(textinputTouchble, '123');
  expect(x).toBe('test123');
});
