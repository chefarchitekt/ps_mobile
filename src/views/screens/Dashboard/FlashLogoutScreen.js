import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Icon, Divider } from 'react-native-elements';


class FlashLogoutScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { navigate, state, setParams } = navigation;
        return {
          title: 'Settings',
          headerRight: (
            <View style={{ flexDirection: 'row' }}>
                <Icon 
                    name='edit'
                    type='Feather'
                    size={26}
                    color='orange'
                    //onPress={() => navigate('Settings')} 
                />
                <Divider color='white' height={26} width={26} />
                <Icon 
                    name='home'
                    type='MaterialCommunityIcons'
                    size={26}
                    color='orange'
                    onPress={() => navigate('Main')} 
                />
                <Divider color='white' height={26} width={26} />
            </View>
            ),
        };
      };
    render() {
        return (
            <Text h2>Logout</Text>
        );
    }
}

export default FlashLogoutScreen;
