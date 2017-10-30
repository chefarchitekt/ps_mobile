import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Button, Icon, Divider } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { userLogoutRequest } from '../../../../process/actions/auth/loginActions';

class MessageListScreen extends Component {
    
    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
          title: 'Messages',
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
                <Divider color='white' height={26} width={26} />
                <Divider color='white' height={26} width={26} />
            </View>
            ),
        };
      };
      
    render() {
       return (
            <View>
                <Text h2>Message List</Text>
                <Text h2>Message List</Text>
                <Text h2>Message List</Text>
                <Text h2>Message List</Text>
                
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userLogoutRequest
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(MessageListScreen);
