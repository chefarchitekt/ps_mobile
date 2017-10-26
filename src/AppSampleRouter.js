import React from 'react';
//import { Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

//import screens
import Feed from './views/screens/Samples/Feed';
import Settings from './views/screens/Samples/Settings';
import UserDetail from './views/screens/Samples/UserDetail';
import Me from './views/screens/Samples/Me';

export const FeedStack = StackNavigator({
    Feed: {
      screen: Feed,
      navigationOptions: {
        title: 'Feed',
      },
    },
    Details: {
      screen: UserDetail,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
      }),
    },
  });
  
  export const Tabs = TabNavigator({
    Feed: {
      screen: FeedStack,
      navigationOptions: {
        tabBarLabel: 'Feed',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      },
    },
    Me: {
      screen: Me,
      navigationOptions: {
        tabBarLabel: 'Me',
        tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      },
    },
  });
  
  export const SettingsStack = StackNavigator({
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: 'Settings',
      },
    },
  });
  
  export const AppSampleRouter = StackNavigator({
    Tabs: {
      screen: Tabs,
    },
    Settings: {
      screen: SettingsStack,
    },
  }, {
    mode: 'modal',
    headerMode: 'none',
  });

