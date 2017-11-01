import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon, Divider } from 'react-native-elements';

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
        const { containerRow, containerBox, teamContainerStyle, callContainerStyle, msgContainerStyle, vmContainerStyle } = styles;

       return (
           <View>
                <View style={containerRow}>
                    <View style={[containerBox, teamContainerStyle]}>
                        <TouchableOpacity>
                            <View>
                                <Text>Hello</Text>
                            </View>
                        </TouchableOpacity >
                    </View>
                </View>
                <View style={containerRow}>
                    <View style={[containerBox, callContainerStyle]}>
                        <TouchableOpacity>
                            <View>
                                <Text>Hello</Text>
                            </View>
                        </TouchableOpacity >
                    </View>
                    <View style={[containerBox, msgContainerStyle]}>
                        <TouchableOpacity>
                            <View>
                                <Text>Hello</Text>
                            </View>
                        </TouchableOpacity >
                    </View>
                    <View style={[containerBox, vmContainerStyle]}>
                        <TouchableOpacity>
                            <View>
                                <Text>Hello</Text>
                            </View>
                        </TouchableOpacity >
                    </View>
                </View>
           </View>
            
        );
    }
}

const styles = {
    containerRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerBox: {
        flex: 1,
        height: 100
    },
    teamContainerStyle: {
        backgroundColor: 'blue'
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
};

const mapStateToProps = (state) => {
    const { userLogin } = state;
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
