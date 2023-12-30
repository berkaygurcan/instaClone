import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens';

type MainNavigationParams = {
  Home: undefined;
};

const Tab = createBottomTabNavigator<MainNavigationParams>();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: 'MarkPro-Medium',
          lineHeight: 13,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
