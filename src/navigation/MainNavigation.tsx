import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Explore} from '../screens';

type MainNavigationParams = {
  Home: undefined;
  Explore: undefined;
};

const Tab = createBottomTabNavigator<MainNavigationParams>();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'black',
        tabBarIconStyle: {
          display: 'none',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'MarkPro-Medium',

          justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
