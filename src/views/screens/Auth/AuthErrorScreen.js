import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';
import VectorIcon from 'react-native-vector-icons/Feather';


class AuthErrorScreen extends Component {
    handleOnPress() {
        const { navigation } = this.props;
        navigation.navigate('NavLogin');
    }
    
    render() {
        return (
            <View>
                <Card
                    title='Authentication Error'
                >   
                    <VectorIcon
                        name='alert-circle'
                        size={104}
                        color='red'
                    />
                    <Text style={{ color: 'black' }} h2>
                        Error when try to authenticate to the server.
                        Please login again with the right credentials.
                    </Text>
                    <Button
                        icon={{ name: 'code' }}
                        backgroundColor='#03A9F4'
                        fontFamily='Lato'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' 
                        onPress={() => this.handleOnPress}
                    />
                </Card>
            </View>
        );
    }
}

export default AuthErrorScreen;
