//import React from 'react';
//import { Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

//import screens
import LoginScreen from './views/screens/Auth/LoginScreen';
import SignupScreen from './views/screens/Auth/SignupScreen';

export const AuthStack = StackNavigator({
  NavLogin: {
    screen: LoginScreen,
  },
  NavSignup: {
    screen: SignupScreen
  }
}, { 
  headerMode: 'none' 
});
  
export const Root = StackNavigator({
  Authentication: {
    screen: AuthStack
  }
}, {
  mode: 'modal',
  headerMode: 'none',
});

