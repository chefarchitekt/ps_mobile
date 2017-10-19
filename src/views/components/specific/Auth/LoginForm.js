import React, { Component } from 'react';
import { View  } from 'react-native';
import { Card, Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

class LoginForm extends Component {
    
    render() {
        const testError = 'test error';
        //we could use card here instead of view
        return (
            <View>
                <FormLabel >User Name</FormLabel>
                <FormInput 
                    placeholder="username..." 
                    autoCorrect={false}
                />
                <FormValidationMessage>{}</FormValidationMessage>

                <FormLabel >Password</FormLabel>
                <FormInput 
                    secureTextEntry 
                    placeholder="password..." 
                />
                <FormValidationMessage>{}</FormValidationMessage>

                <FormLabel >Account Name</FormLabel>
                <FormInput 
                    placeholder="account name..." 
                    autoCorrect={false}
                />
                <FormValidationMessage>{}</FormValidationMessage>

                <Button
                    buttonStyle={{ marginTop: 20 }}
                    backgroundColor="#03A9F4"
                    title="SIGN IN"
                />
            </View>
        );
    }
}

export { LoginForm };
