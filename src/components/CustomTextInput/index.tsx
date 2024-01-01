import React from 'react';
import {
  TextInput,
  StyleSheet,
  TextStyle,
  KeyboardTypeOptions,
} from 'react-native';

interface CustomTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  style?: TextStyle; // Yeni eklenen style prop'u
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  secureTextEntry,
  style,
}) => {
  return (
    <TextInput
      style={[styles.input, style]} // Dışarıdan gelen stil ile birleştirme
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 42,
    borderRadius: 6,
    borderWidth: 2,
    paddingHorizontal: 16,
    borderColor: '#E0DDDD',
    marginVertical: 8,
  },
});

export default CustomTextInput;
