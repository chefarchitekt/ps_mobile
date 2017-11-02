import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import VectorIcon from 'react-native-vector-icons/Feather';

class ContactActionPanel extends Component {
    
    render() {
        const { navigation } = this.props.panelNavigation;
        return (
            <View style={styles.controlPanel.boxContainer}>
            <View style={styles.controlPanel.boxItem}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('NavCallDialup')}>
                    <VectorIcon
                        name='phone-call'
                        size={26}
                        color='green'
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.controlPanel.boxItem}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('NavMessageList')}>
                    <VectorIcon
                        name='message-square'
                        size={26}
                        color='orange'
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.controlPanel.boxItem}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('NavVoicemailList')}>
                    <VectorIcon
                        name='voicemail'
                        size={26}
                        color='red'
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.controlPanel.boxItem}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('NavContactDetail')}>
                    <VectorIcon
                        name='file'
                        size={26}
                        color='blue'
                    />
                </TouchableOpacity>
            </View>
        </View>
        );
    }
}

const styles = {
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

export { ContactActionPanel };
