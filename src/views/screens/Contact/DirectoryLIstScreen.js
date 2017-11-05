import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { List, ListItem, Icon, Divider } from 'react-native-elements';
import VectorIcon from 'react-native-vector-icons/Feather';

import DirectoryActionPanel from '../../../views/components/common/DirectoryActionPanel';
import { userLogoutRequest } from '../../../process/actions/auth/loginActions';
import { selectContactListItem, getActiveContact } from '../../../process/actions/contact/contactActions';
import { mobileMetrics } from '../../../views/config/';

class DirectoryListScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
          title: 'Company Contacts',
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

    componentDidMount() {
        this.props.navigation.setParams({ logOut: this.onLogout });
    }
      
    handleOnPress(listItem) {
        const { KazooAccountId } = this.props.userLogin.user;
        this.props.selectContactListItem(listItem);
        this.props.getActiveContact(listItem.id, KazooAccountId, 'team');
    }
    
    isOnline(status) {
        if (status === 'online') {
            return {
                name: 'fiber-smart-record', //'phone'
                size: 26,
                color: 'green'
                
            };
        } else if (status === 'oncall') {
            return {
                name: 'fiber-smart-record', //'phone-in-talk'
                size: 26,
                color: 'orange'
                
            };
        } else {
            return {
                name: 'fiber-smart-record', //'phone-locked'
                size: 26,
                color: 'red'
                
            };
        }
    }

    /* //redux state of userProfileContacts
        {
            profileDetail: {},
            isListItemSelected: false,
            selectedUserContact: {},
            activeContact: {},
            teamContacts: [],
            personalContacts: [],
            isLoading: false,
            credentialError: false
        };
    */
    renderList() {
        const userList = this.props.userProfileContacts.teamContacts;
        if (userList.length > 0) {
            return (
                <ScrollView>
                <List containerStyle={{ marginBottom: 20 }}>
                    {
                        userList.map((listItem, i) => (
                        <ListItem
                            roundAvatar
                            leftIcon={{ name: 'person', color: 'blue' }}
                            key={i}
                            title={listItem.name}
                            subtitle={this.renderControl(listItem.id)}
                            rightIcon={this.isOnline(listItem.status)}
                            onPress={() => this.handleOnPress(listItem)}
                        />
                        
                    ))
                    }
                </List>
            </ScrollView>
            );
        } else {
            return (
                <ScrollView>
                <List containerStyle={{ marginBottom: 20 }}>
                    {
                        <ListItem
                            roundAvatar
                            leftIcon={{ name: 'person', color: 'red' }}
                            key={0}
                            title='You have yet to have team members.'
                        />
                    }
                </List>
            </ScrollView>
            );
        }
    }

    renderControl(selectedId) {
        const { activeContact, isListItemSelected } = this.props.userProfileContacts;
        const expanded = activeContact.id === selectedId;
        //const { navigation } = this.props;
        if (isListItemSelected && expanded) {
            return (
                <DirectoryActionPanel panelNavigation={this.props} />
            );     
        }
    }
    
    render() {
        const userList = this.props.userProfileContacts.teamContacts;
        const totalListItem = userList.length;
        const { 
            containerBase, 
            containerRow1, 
            containerRow2,
            containerBox1, 
            containerBox2, 
            teamContainerStyle, 
            tabContainerStyle
        } = styles;

        const { navigation } = this.props;
        return (
           <View style={containerBase}>
                <View style={containerRow2}>
                    <View style={[containerBox2, tabContainerStyle]}>
                        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('NavContactList')}>
                            <VectorIcon
                                name='phone-call'
                                size={52}
                                color='green'
                            />
                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'red' }}>3</Text>
                            <Text style={{ fontSize: 14, color: 'red' }}>Missed Call</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[containerBox2, tabContainerStyle]}>
                        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('NavDirectoryList')}>
                            <VectorIcon
                                name='message-square'
                                size={52}
                                color='orange'
                            />
                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'red' }}>7</Text>
                            <Text style={{ fontSize: 14, color: 'red' }}>New Message</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={containerRow1}>
                <View style={[containerBox1, teamContainerStyle]}>
                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <VectorIcon name='users' size={32} color='grey' />
                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'grey' }}> Team ({totalListItem}) </Text>
                        </View>
                        {this.renderList()}
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
        flex: 4,
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
        height: boxHeight * 3,
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
    tabContainerStyle: {
        backgroundColor: 'white'
    }
};

const mapStateToProps = (state) => {
    const { userLogin, userProfileContacts } = state;

    return {
        userLogin,
        userProfileContacts
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userLogoutRequest,
        selectContactListItem,
        getActiveContact
    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(DirectoryListScreen);
