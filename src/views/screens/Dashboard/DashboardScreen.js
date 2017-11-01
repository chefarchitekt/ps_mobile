import React, { Component } from 'react';
import { View } from 'react-native';
import { Grid, Row, Col, Card, Text, Button, Icon, Divider } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { userLogoutRequest } from '../../../process/actions/auth/loginActions';

class DashboardScreen extends Component {
    
    static navigationOptions = ({ navigation }) => {
        const { state, navigate } = navigation;
        return {
          title: 'Dashboard',
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

        const { teamContainerStyle, callContainerStyle, msgContainerStyle, vmContainerStyle } = styles;

       return (
            <Grid>
                <Row size={3} containerStyle={teamContainerStyle}>
                    <Card>
                        <Icon
                            name='user'
                            type='feather'
                            color='blue'
                            size={100}
                            onPress={() => console.log('hello')} 
                        />
                    </Card>
                </Row>
                <Row size={1}>
                    <Col containerStyle={callContainerStyle}>
                        <Card>
                            <Icon
                                name='phone'
                                type='feather'
                                color='white'
                                size={100}
                                onPress={() => console.log('hello')} 
                            />
                        </Card>
                    </Col>
                    <Col containerStyle={msgContainerStyle}>
                    <Card>
                        <Icon
                            name='message-square'
                            type='feather'
                            color='white'
                            size={100}
                            onPress={() => console.log('hello')} 
                        />
                    </Card>
                    </Col>
                    <Col containerStyle={vmContainerStyle}>
                    <Card>
                        <Icon
                            name='voicemail'
                            type='feather'
                            color='white'
                            size={100}
                            onPress={() => console.log('hello')} 
                        />
                    </Card>
                    </Col>
                </Row>                
            </Grid>
        );
    }
}

const styles = {
    teamContainerStyle: {
        backgroundColor: 'white'
    },
    callContainerStyle: {
        backgroundColor: 'green'
    },
    msgContainerStyle: {
        backgroundColor: 'orange'
    },
    vmContainerStyle: {
        backgroundColor: 'red'
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
        userLogoutRequest,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
