import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Button, Icon, Divider } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { userReloginRequest, userLogoutRequest, checkAuthenticationStatus } from '../../../../process/actions/auth/loginActions';

class MessageListScreen extends Component {
    
    static navigationOptions = ({ navigation }) => {
        const { state, navigate } = navigation;
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
                <Icon 
                    name='exit-to-app'
                    type='MaterialCommunityIcons'
                    size={26}
                    color='orange'
                    onPress={() => state.params.logOut()} 
                />
            </View>
            ),
        };
      };

      
      componentDidMount() {
        this.props.navigation.setParams({ logOut: this.onLogout });
      }
      

      componentDidUpdate() {
        const { isAuthenticated } = this.props.userLogin;
        console.log('MESSAGE SCREEN isAuth status ' + isAuthenticated);
        if (!isAuthenticated) {
            this.props.navigation.navigate('Authentication');
        }
    }

    onLogout() {
        this.props.userLogoutRequest(); //this one does not work
        this.props.navigation.navigate('Authentication');
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
        userReloginRequest,
        userLogoutRequest,
        checkAuthenticationStatus
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageListScreen);
