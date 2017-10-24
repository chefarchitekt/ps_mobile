import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loginUserInput, loginInputError, userLoginRequest } from '../../../../process/actions';
import validateLoginInput from '../../../../process/validations/validateLoginInput';


class LoginForm extends Component {
    constructor(props) {
        super(props); //also super() if we dont use this.props
        
        //this.onChangeText = this.onChangeText.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    /*
    onChangeText(e) {
       this.props.loginUserInput({ prop: [e.target.name], value: e.target.value });
    }
    */

    onSubmit(e) {
        const { 
            UserName, 
            UserPassword, 
            KazooAccountName,
            IsPersistent
        } = this.props;

        const loginData = {
            UserName, 
            UserPassword, 
            KazooAccountName,
            IsPersistent
        };

        e.preventDefault();

        console.log('logindata');
        console.log(loginData);

        console.log('ISVALID VALUE');
        console.log(this.isValid());


        if (this.isValid) {
            this.props.userLoginRequest(loginData);
        }
    }

    isValid() {
        const { 
            UserName, 
            UserPassword, 
            KazooAccountName
        } = this.props;
        const { errors, isValid } = validateLoginInput({ 
            UserName, 
            UserPassword, 
            KazooAccountName
        });
        if (!isValid) {
            this.props.loginInputError(errors);
        }

        return isValid;
    }
    render() {
        console.log(this.props);
        const inputErrors = this.props.input_errors;
        //we could use card here instead of view
        return (
            <View>
                <FormLabel >User Name</FormLabel>
                <FormInput 
                    placeholder="username..." 
                    autoCorrect={false}
                    value={this.props.UserName}
                    onChangeText={text => this.props.loginUserInput({ prop: 'UserName', value: text })}
                />
                <FormValidationMessage>{inputErrors.UserName}</FormValidationMessage>

                <FormLabel >Password</FormLabel>
                <FormInput 
                    secureTextEntry 
                    placeholder="password..." 
                    value={this.props.UserPassword}
                    onChangeText={text => this.props.loginUserInput({ prop: 'UserPassword', value: text })}
                    
                />
                <FormValidationMessage>{inputErrors.UserPassword}</FormValidationMessage>

                <FormLabel >Account Name</FormLabel>
                <FormInput 
                    placeholder="account name..." 
                    autoCorrect={false}
                    value={this.props.KazooAccountName}
                    onChangeText={text => this.props.loginUserInput({ prop: 'KazooAccountName', value: text })}
                />
                <FormValidationMessage>{inputErrors.KazooAccountName}</FormValidationMessage>

                <Button
                    buttonStyle={{ marginTop: 20 }}
                    backgroundColor="#03A9F4"
                    title="SIGN IN"
                    onPress={this.onSubmit}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { 
        UserName, 
        UserPassword, 
        KazooAccountName, 
        IsPersistent, 
        isLoading,
        input_errors,
        server_errors
    } = state.userLogin;

    return { 
        UserName, 
        UserPassword, 
        KazooAccountName, 
        IsPersistent, 
        isLoading,
        input_errors,
        server_errors
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loginUserInput,
        loginInputError,
        userLoginRequest, //userSignupRequest: userSignupRequest,
        //addFlashMessage //addFlashMessage: addFlashMessage
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
