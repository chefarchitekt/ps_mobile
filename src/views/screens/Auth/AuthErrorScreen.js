import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';
import VectorIcon from 'react-native-vector-icons/Feather';
import { mobileMetrics } from '../../../views/config/';


class AuthErrorScreen extends Component {
    handleOnPress() {
        const { navigation } = this.props;
        navigation.navigate('Authentication');
    }
    
    render() {
        return (
            <View style={styles.containerBase}>
                <View style={styles.containerRow1}>
                    <View style={styles.containerBox1}>
                        <View style={{ marginTop: 50, marginBottom: 50 }}>
                            <VectorIcon
                                name='alert-circle'
                                size={104}
                                color='red'
                            />
                        </View>
                        <View style={styles.messageBox.base}>
                            <View>
                                <Text style={styles.messageBox.titleText}>AUTHENTICATION ERROR</Text>
                            </View>
                            <View>
                                <Text style={styles.messageBox.bodyText}>
                                Error when try to authenticate to the server.
                                Please login again with the right credentials.
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.containerRow2}>
                    <View style={styles.containerBox2}>
                        <Button
                            icon={{ name: 'person' }}
                            backgroundColor='#03A9F4'
                            color='white'
                            fontFamily='Lato'
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='Back to Login' 
                            onPress={() => this.handleOnPress()}
                            onLongPress={() => this.handleOnPress()}
                        />
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
        marginRight: 5,
        justifyContent: 'center'        
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
        paddingLeft: 5,
        paddingBottom: 5,
        paddingRight: 5,
        borderWidth: 0.5,
        borderColor: 'grey',
        alignItems: 'center'
    },
    containerBox2: {
        flex: 1,
        height: boxHeight,
        marginBottom: 5,
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5,
        paddingRight: 5,
        alignItems: 'center'
    },
    messageBox: {
        base: {
            backgroundColor: '#ef553a',
            width: 300,
            paddingTop: 10,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20, 
            borderRadius: 10
        },
        titleText: {
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
            fontSize: 26,
            marginBottom: 10
        },
        bodyText: {
            color: '#fff',
            fontSize: 18
        }
    }
};

export default AuthErrorScreen;
