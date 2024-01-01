import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import Typography from '../../../components/Typography';
import LoginHooks from './hooks';
import CustomTextInput from '../../../components/CustomTextInput';

const Login = () => {
  const {handleSubmit, password, onChangePassword, input, onChangeText} =
    LoginHooks();
  return (
    <View style={styles.container}>
      <CustomTextInput
        style={styles.input}
        value={input}
        onChangeText={onChangeText}
        keyboardType="email-address"
        placeholder="phone number,username, or email"
      />
      <CustomTextInput
        onChangeText={onChangePassword}
        style={styles.input}
        value={password}
        placeholder="password"
      />
      <Typography
        style={styles.forgotPassTextStyle}
        text={'Forgot password?'}
      />

      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Typography style={styles.btnTextStyle} text={'Login'} />
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
