import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { List, ListItem, Icon, Divider } from 'react-native-elements';
import VectorIcon from 'react-native-vector-icons/Feather';

import ContactActionPanel from '../../../views/components/common/ContactActionPanel';
import { selectContactListItem, getActiveContact } from '../../../process/actions/contact/contactActions';
import { mobileMetrics } from '../../../views/config/';

class ContactListScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
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

    handleOnPress(listItem) {
        const { KazooAccountId } = this.props.userLogin.user;
        this.props.selectContactListItem(listItem);
        this.props.getActiveContact(listItem.id, KazooAccountId, 'personal', listItem);
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
        const userList = this.props.userProfileContacts.personalContacts;
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
                            title={
                                <View>
                                <Text style={{ fontSize: 18, color: '#7A7979' }}>{listItem.name}</Text>
                                    <Text style={{ fontSize: 14, color: '#8F8C8C' }}>{listItem.number}</Text>
                                </View>
                            }
                            subtitle={this.renderControl(listItem.id)}
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
                            title='You have yet to have personal contact.'
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
                <ContactActionPanel panelNavigation={this.props} />
            );     
        }
    }
    
    render() {
        const userList = this.props.userProfileContacts.personalContacts;
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
                                name='users'
                                size={48}
                                color='red'
                            />
                            <Text style={{ fontSize: 26, color: 'red' }}>Personal</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[containerBox2, tabContainerStyle]}>
                        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('NavDirectoryList')}>
                            <VectorIcon
                                name='users'
                                size={48}
                                color='grey'
                            />
                            <Text style={{ fontSize: 26, color: 'grey' }}>Team</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={containerRow1}>
                    <View style={[containerBox1, teamContainerStyle]}>
                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <VectorIcon name='square' size={24} color='grey' />
                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'grey' }}> List ({totalListItem}) </Text>
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
        height: boxHeight * 0.65,
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
        selectContactListItem,
        getActiveContact
    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(ContactListScreen);
