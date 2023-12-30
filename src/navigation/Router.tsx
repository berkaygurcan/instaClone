import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GetFromStorage, StorageType} from '../utilities/StorageHelper';
import MainNavigation from './MainNavigation';
import AuthNavigation from './AuthNavigation';

const Router = () => {
  useEffect(() => {
    init();
  }, []);

  let isLogin = '';

  const init = async () => {
    isLogin = (await GetFromStorage(StorageType.USERNAME)) || '';
  };

  return (
    <NavigationContainer>
      {!isLogin === 'test' ? <AuthNavigation /> : <MainNavigation />}
    </NavigationContainer>
  );
};

export default Router;
