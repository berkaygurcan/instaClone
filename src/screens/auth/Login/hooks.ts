import {useState} from 'react';
import {Alert} from 'react-native';
import {AddToStorage, StorageType} from '../../../utilities/StorageHelper';
import useAuthStore from '../../../store/authStore';

const LoginHooks = () => {
  const {setIsLogin} = useAuthStore();
  const [password, onChangePassword] = useState('');
  const [input, onChangeText] = useState('');

  const handleSubmit = () => {
    if (password === '1234' && input === 'Test') {
      AddToStorage(StorageType.USERNAME, 'test');
      setIsLogin('test');
    } else {
      showAlert();
    }
  };

  const showAlert = () =>
    Alert.alert('Warning', 'Wrong Password', [
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
