import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Icon, Divider } from 'react-native-elements';


class GuideScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { navigate, state, setParams } = navigation;
        return {
          title: 'Guides',
          headerRight: (
            <View style={{ flexDirection: 'row' }}>
                <Icon 
                    name='user-secret'
                    type='font-awesome'
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
            <Text h2>Guide</Text>
        );
    }
}

export default GuideScreen;
