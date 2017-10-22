import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Icon, Divider } from 'react-native-elements';


class ContactListScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { navigate, state, setParams } = navigation;
        return {
          title: 'Personal Contacts',
          headerRight: (
            <View style={{ flexDirection: 'row' }}>
                <Icon 
                    name='settings'
                    type='MaterialCommunityIcons'
                    size={26}
                    color='orange'
                    onPress={() => navigate('Settings')} 
                />
                <Divider color='white' height={26} width={26} />
                <Icon 
                    name='help'
                    type='MaterialCommunityIcons'
                    size={26}
                    color='orange'
                    onPress={() => navigate('Help')} 
                />
                <Divider color='white' height={26} width={26} />
            </View>
            ),
        };
      };
    render() {
        return (
            <Text h2>Contact List</Text>
        );
    }
}

export default ContactListScreen;
