import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuthStore = create(set => ({
  isLogin: '',
  setIsLogin: async newValue => {
    set({isLogin: newValue});
    await AsyncStorage.setItem('USERNAME', newValue);
  },
  init: async () => {
    const storedLogin = (await AsyncStorage.getItem('USERNAME')) || '';
    set({isLogin: storedLogin});
  },
}));

export default useAuthStore;
