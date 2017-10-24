import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Icon, Divider } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { isSignIn } from '../../../../services/storageServices';
import { userReloginRequest } from '../../../../process/actions/auth/loginActions';

class MessageListScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { navigate, state, setParams } = navigation;
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
            </View>
            ),
        };
      };
    
    componentWillMount() {
        const isAuthenticated = isSignIn();
        if (isAuthenticated) {
            this.props.userReloginRequest();
        }
    }
       
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

const mapStateToProps = (state) => {
    const userLogin = state.userLogin;

    return {
        userLogin
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userReloginRequest
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageListScreen);
