import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SignupForm } from '../../components/specific';
import { Spinner, ScreenLogo, LoginSection } from '../../components/common';
import { mobileMetrics } from '../../../views/config';

const DEVICE_WIDTH = mobileMetrics.DEVICE_WIDTH;
class SignupScreen extends Component {
    handlePressForLogin = () => {
        this.props.navigation.navigate('NavLogin');
    };

    handlePressForSignupInfo = () => {
        this.props.navigation.navigate('NavSignupInfo');
    };

    renderContent = () => {
        return (
            <SignupForm />
        );
    };

    render() {
        const { containerStyle, signupSectionStyle, textStyle } = styles;
        return (
            <View style={containerStyle}>
                <ScreenLogo />
                {this.renderContent()}
                {/*<LoginSection />*/}
                <View style={signupSectionStyle}>
                    <TouchableOpacity onPress={this.handlePressForLogin}>
                        <Text style={textStyle}>
                            Back to Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handlePressForSignupInfo}>
                        <Text style={textStyle}>
                            Signup Option Info
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


export default SignupScreen;
