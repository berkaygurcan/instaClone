import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './MainNavigation';
import AuthNavigation from './AuthNavigation';
import useAuthStore from '../store/authStore';

const Router = () => {
  const {isLogin, init} = useAuthStore();

  useEffect(() => {
    init();
  }, []);

  return (
    <NavigationContainer>
      {isLogin === 'test' ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Router;
