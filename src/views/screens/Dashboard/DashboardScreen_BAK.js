import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { List, ListItem, Icon, Divider } from 'react-native-elements';
import VectorIcon from 'react-native-vector-icons/Feather';

import ContactActionPanel from '../../../views/components/common/ContactActionPanel';
import { userLogoutRequest } from '../../../process/actions/auth/loginActions';
import { selectContactListItem } from '../../../process/actions/contact/contactActions';
import { mobileMetrics } from '../../../views/config/';

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

    isOnline(status) {
        if (status === 'online') {
            return {
                name: 'phone',
                size: 26,
                color: 'green'
                
            };
        } else if (status === 'oncall') {
            return {
                name: 'phone-in-talk',
                size: 26,
                color: 'orange'
                
            };
        } else {
            return {
                name: 'phone-locked',
                size: 26,
                color: 'red'
                
            };
        }
    }
    
    renderControl(selectedId) {
        const { activeContact, isListItemSelected } = this.props.userContacts;
        const expanded = activeContact.id === selectedId;
        //const { navigation } = this.props;
        if (isListItemSelected && expanded) {
        return (
            <ContactActionPanel panelNavigation={this.props} />
            );     
        }
    }
    
    render() {
        //mock
        const userList = [
            {
                id: 'adf001',
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'President',
                phone: '(+1)23411111',
                status: 'online'
            },
            {
                id: 'adf002',
                name: 'Jessica',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President',
                phone: '(+1)22255622',
                status: 'offline'
            },
            {
                id: 'adf003',
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman',
                phone: '(+1)23355633',
                status: 'oncall'
            },
            {
                id: 'adf004',
                name: 'Brandon Lee',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Senior Manager',
                phone: '(+1)23335634',
                status: 'online'
            },
            {
                id: 'adf005',
                name: 'Ellen',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Manager',
                phone: '(+1)23785655',
                status: 'online'
            },
            {
                id: 'adf006',
                name: 'Jessica',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President',
                phone: '(+1)26555656',
                status: 'oncall'
            },
            {
                id: 'adf007',
                name: 'Damien Rock',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman',
                phone: '(+1)21155677',
                status: 'offline'
            },
            {
                id: 'adf008',
                name: 'John Butler',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Senior Manager',
                phone: '(+1)23413688',
                status: 'offline'
            }
        ];

        const { 
            containerBase, 
            containerRow1, 
            containerRow2,
            containerBox1, 
            containerBox2, 
            teamContainerStyle, 
            callContainerStyle, 
            msgContainerStyle, 
            vmContainerStyle 
        } = styles;

        const { navigation } = this.props;
       return (
           <View style={containerBase}>
                <View style={containerRow1}>
                    <View style={[containerBox1, teamContainerStyle]}>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <VectorIcon name='users' size={32} color='grey' />
                                <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'grey' }}> Team</Text>
                            </View>
                            <ScrollView>
                                <List containerStyle={{ marginBottom: 20 }}>
                                    {
                                        userList.map((listItem, i) => (
                                        <ListItem
                                            roundAvatar
                                            avatar={{ uri: listItem.avatar_url }}
                                            key={i}
                                            title={listItem.name}
                                            subtitle={this.renderControl(listItem.id)}
                                            rightIcon={this.isOnline(listItem.status)}
                                            onPress={() => this.props.selectContactListItem(listItem)}
                                        />
                                        
                                    ))
                                    }
                                </List>
                            </ScrollView>
                    </View>
                </View>
                <View style={containerRow2}>
                    <View style={[containerBox2, callContainerStyle]}>
                        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('NavCalls')}>
                            <VectorIcon
                                name='phone-call'
                                size={52}
                                color='green'
                            />
                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'green' }}>3</Text>
                            <Text style={{ fontSize: 14, color: 'green' }}>Missed Call</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[containerBox2, msgContainerStyle]}>
                        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('NavMessages')}>
                            <VectorIcon
                                name='message-square'
                                size={52}
                                color='orange'
                            />
                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'orange' }}>7</Text>
                            <Text style={{ fontSize: 14, color: 'orange' }}>New Message</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[containerBox2, vmContainerStyle]}>
                        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('NavVoiceMail')}>
                            <VectorIcon
                                name='voicemail'
                                size={52}
                                color='red'
                            />
                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'red' }}>0</Text>
                            <Text style={{ fontSize: 14, color: 'red' }}>New Voicemail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
           </View>
            
        );
    }
}
const HEIGHT = mobileMetrics.DEVICE_HEIGHT;
const WIDTH = mobileMetrics.DEVICE_WIDTH;
const boxCount = 3;
const boxHeight = HEIGHT / boxCount;

const styles = {
    containerBase: {
        flex: 1,
        flexDirection: 'column'
    },
    containerRow1: {
        flex: 3,
        flexDirection: 'column',
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 5,
        marginRight: 5        
    },
    containerRow2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 5,
        marginRight: 5
    },
    containerBox1: {
        flex: 1,
        height: boxHeight * 2,
        paddingTop: 5,
        paddingBottom: 5
    },
    containerBox2: {
        flex: 1,
        height: boxHeight,
        marginBottom: 10,
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5,
        paddingRight: 5,
        borderWidth: 0.5,
        borderColor: 'grey',
        alignItems: 'center'
    },
    teamContainerStyle: {
        backgroundColor: 'white'
    },
    callContainerStyle: {
        backgroundColor: 'white'
    },
    msgContainerStyle: {
        backgroundColor: 'white'
    },
    vmContainerStyle: {
        backgroundColor: 'white'
    },
    
    controlPanel: {
        boxContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 1,
            marginLeft: 1,
            marginBottom: 1,
            marginRight: 1
        },
        boxItem: {
            flex: 1,
            height: 30,
            marginTop: 1,
            marginBottom: 1,
            paddingTop: 2,
            paddingLeft: 2,
            paddingBottom: 2,
            paddingRight: 2,
            borderWidth: 0.5,
            borderColor: 'grey',
            alignItems: 'center'
        }
    }
};

const mapStateToProps = (state) => {
    const { userLogin, userContacts } = state;

    return {
        userLogin,
        userContacts
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userLogoutRequest,
        selectContactListItem
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
