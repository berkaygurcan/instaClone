import {useState} from 'react';
import {Alert} from 'react-native';
import {AddToStorage, StorageType} from '../../../utilities/StorageHelper';

const LoginHooks = () => {
  const [password, onChangePassword] = useState('');
  const [input, onChangeText] = useState('');

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

  return {handleSubmit, password, onChangePassword, input, onChangeText};
};

export default LoginHooks;
