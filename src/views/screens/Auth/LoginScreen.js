import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LoginForm from '../../components/specific/Auth/LoginForm';
import { Spinner, ScreenLogo, SignupSection } from '../../components/common';
import { mobileMetrics } from '../../../views/config';

const DEVICE_WIDTH = mobileMetrics.DEVICE_WIDTH;

class LoginScreen extends Component {

    handlePressForSignup = () => {
        this.props.navigation.navigate('NavSignup');
    };

    handlePressForPasswordRecovery = () => {
        this.props.navigation.navigate('NavPwdRecover');
    };

    renderContent = () => {
        return (<LoginForm {...this.props} />);
    };

    render() {
        const { containerStyle, signupSectionStyle, textStyle } = styles;
        return (
            
            <View style={containerStyle}>
                <ScreenLogo />
                {this.renderContent()}
                {/*<SignupSection />*/}
                <View style={signupSectionStyle}>
                    <TouchableOpacity onPress={this.handlePressForSignup}>
                        <Text style={textStyle}>
                            New Signup
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handlePressForPasswordRecovery}>
                        <Text style={textStyle}>
                            Forgot Password
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1
    },
    signupSectionStyle: {
        flex: 1,
		top: 25,
		width: DEVICE_WIDTH,
		flexDirection: 'row',
		justifyContent: 'space-around',
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default LoginScreen;
