import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {AddToStorage, StorageType} from '../../../utilities/StorageHelper';

const Login = () => {
  const [password, onChangePassword] = useState('');
  const [input, onChangeText] = React.useState('');

  const handleSubmit = () => {
    if (password === '1234' && input === 'Test') {
      AddToStorage(StorageType.USERNAME, 'test');
      //Handle navigation
    } else {
      alert();
    }
  };

  const alert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'OK',
        onPress: () => {
          onChangePassword('');
          onChangeText('');
        },
      },
    ]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={onChangeText}
        keyboardType="email-address"
        placeholder="phone number,username, or email"
      />
      <TextInput
        onChangeText={onChangePassword}
        style={styles.input}
        value={password}
        placeholder="password"
      />

      <Text style={styles.forgotPassTextStyle}>Forgot password?</Text>
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnTextStyle}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 42,
    borderRadius: 6,
    borderWidth: 2,
    paddingHorizontal: 16,
    borderColor: '#E0DDDD',
    marginVertical: 8,
  },
  forgotPassTextStyle: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  btn: {
    width: '100%',
    borderRadius: 6,
    borderWidth: 2,
    padding: 16,
    backgroundColor: '#1877f2',
    marginTop: 16,
  },
  btnTextStyle: {
    textAlign: 'center',
  },
});

export default Login;
