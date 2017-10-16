import React { Component } from 'react';
import  { Button, Text, FormInput, FormLabel  } from 'react-native-elements';

class LoginForm extends Component {
    render() {
        return (
            <View>
                <FormLabel >UserName</FormLabel>
                <FormInput 
                    
                />
                <FormValidationMessage>
                {}
                </FormValidationMessage>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    headingContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 40,
      backgroundColor: colors.secondary2,
    },
    heading: {
      color: 'white',
      marginTop: 10,
      fontSize: 22,
    },
    labelContainerStyle: {
      marginTop: 8,
    },
  });

export default LoginForm;
