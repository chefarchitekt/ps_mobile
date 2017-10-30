import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Button, Icon, Divider } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { userReloginRequest, userLogoutRequest, checkAuthenticationStatus } from '../../../process/actions/auth/loginActions';

class DashboardScreen extends Component {
    
    static navigationOptions = ({ navigation }) => {
        const { state, navigate } = navigation;
        return {
          title: 'Dahsboard',
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

    constructor(props) {
        super(props);
        this.onLogout = this.onLogout.bind(this);
    }

    componentDidMount() {
        this.props.navigation.setParams({ logOut: this.onLogout });
    }
      
    onLogout() {
        this.props.userLogoutRequest(); //this one does not work
        this.props.navigation.navigate('Authentication');
    }
       
    render() {
       return (
            <View>
                <Text h2>Dashboard</Text>                
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
