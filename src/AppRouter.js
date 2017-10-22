import React from 'react'; 
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import FeatherIcon from 'react-native-vector-icons/Feather';

//import screens
import LoginScreen from './views/screens/Auth/LoginScreen';
import SignupScreen from './views/screens/Auth/SignupScreen';
import SettingsScreen from './views/screens/Auth/SettingsScreen';

import MessageListScreen from './views/screens/Comm/Messages/MessageListScreen';
import MessageDetailScreen from './views/screens/Comm/Messages/MessageDetailScreen';
import VoiceMailListScreen from './views/screens/Comm/VoiceMail/VoiceMailListScreen';
import VoiceMailDetailScreen from './views/screens/Comm/VoiceMail/VoiceMailDetailScreen';
import CallListScreen from './views/screens/Comm/Calls/CallListScreen';
import CallDialupScreen from './views/screens/Comm/Calls/CallDialupScreen';

import ContactListScreen from './views/screens/Contact/ContactListScreen';
import ContactDetailScreen from './views/screens/Contact/ContactDetailScreen';
import DirectoryListScreen from './views/screens/Contact/DirectoryListScreen';
import DirectoryDetailScreen from './views/screens/Contact/DirectoryDetailScreen';

import GuideScreen from './views/screens/Help/GuideScreen';

export const AuthStack = StackNavigator({
  NavLogin: {
    screen: LoginScreen
  },
  NavSignup: {
    screen: SignupScreen
  }
}, { headerMode: 'none' });

//comms navigation
export const MessageStack = StackNavigator({
  NavMessageList: {
    screen: MessageListScreen
  },
  NavMessageDetail: {
    screen: MessageDetailScreen
  }
});

export const VoiceMailStack = StackNavigator({
  NavVoicemailList: {
    screen: VoiceMailListScreen
  },
  NavVoiceMailDetail: {
    screen: VoiceMailDetailScreen
  }
});

export const CallStack = StackNavigator({
  NavCallList: {
    screen: CallListScreen
  },
  NavCallDialup: {
    screen: CallDialupScreen
  }
});


//contacts navigation
export const ContactStack = StackNavigator({
  NavContactList: {
    screen: ContactListScreen
  },
  NavContactDetail: {
    screen: ContactDetailScreen
  }
});

export const DirectoryStack = StackNavigator({
  NavDirectoryList: {
    screen: DirectoryListScreen
  },
  NavDirectoryDetail: {
    screen: DirectoryDetailScreen
  }
});


//to be included in every page
export const SettingsStack = StackNavigator({
  NavSettings: {
    screen: SettingsScreen
  }
});

export const HelpStack = StackNavigator({
  NavHelp: {
    screen: GuideScreen
  }
});


//main navigation exlude settings and help
export const MainTabs = TabNavigator({
  NavMessages: {
    screen: MessageStack,
    navigationOptions: {
      tabBarLabel: 'Message',
      tabBarIcon: ({ tintColor }) => <FeatherIcon name='message-circle' size={26} style={{ color: tintColor }} />   
    }
  },
  NavVoiceMail: {
    screen: VoiceMailStack,
    navigationOptions: {
      tabBarLabel: 'Voicemail',
      tabBarIcon: ({ tintColor }) => <FeatherIcon name='voicemail' size={26} style={{ color: tintColor }} />   
    }
  },
  NavCalls: {
    screen: CallStack,
    navigationOptions: {
      tabBarLabel: 'Calls',
      tabBarIcon: ({ tintColor }) => <FeatherIcon name='phone-call' size={26} style={{ color: tintColor }} />   
    }
  },
  NavContact: {
    screen: ContactStack,
    navigationOptions: {
      tabBarLabel: 'Contact',
      tabBarIcon: ({ tintColor }) => <FeatherIcon name='users' size={26} style={{ color: tintColor }} />   
    }
  },
  NavDirectory: {
    screen: DirectoryStack,
    navigationOptions: {
      tabBarLabel: 'Directory',
      tabBarIcon: ({ tintColor }) => <FeatherIcon name='list' size={26} style={{ color: tintColor }} />   
    }
  }
}, {
  //headerMode: 'none',        // I don't want a NavBar at top
  tabBarPosition: 'bottom',  // So your Android tabs go bottom
  tabBarOptions: {
    activeTintColor: 'red',  // Color of tab when pressed
    inactiveTintColor: '#b5b5b5', // Color of tab when not pressed
    showIcon: 'true', // Shows an icon for both iOS and Android
    showLabel: (Platform.OS !== 'android'), //No label for Android
    labelStyle: {
      fontSize: 11,
    },
    style: {
      backgroundColor: '#fff', // Makes Android tab bar white instead of standard blue
      height: (Platform.OS === 'ios') ? 48 : 50 // I didn't use this in my app, so the numbers may be off. 
    },
    scrolEnabled: true,
    lazyLoad: true,
    swipeEnabled: true, 
    animationEnabled: true
  },
});

export const RootNavigator = (isSignedIn) => {
  return StackNavigator({
    Authentication: {
      screen: AuthStack
    },
    Main: {
      screen: MainTabs
    },
    Settings: {
      screen: SettingsStack
    },
    Help: {
      screen: HelpStack
    }
  }, {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: isSignedIn ? 'Main' : 'Authentication'
  });
};
