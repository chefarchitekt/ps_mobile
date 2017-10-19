import React from 'react';
import { View } from 'react-native';
import { mobileMetrics } from '../../../views/config';
import { NavigationText } from './index';

const DEVICE_WIDTH = mobileMetrics.DEVICE_WIDTH;
//const DEVICE_HEIGHT = mobileMetrics.DEVICE_HEIGHT;

const SignupSection = () => {
    return (
    <View style={styles.containerStyle}>
        <NavigationText navigationKey='NavSignup' {...this.props}>New Signup</NavigationText>
        <NavigationText navigationKey='NavSignup' {...this.props}>Forgot Password?</NavigationText>
    </View>
    );
};

const styles = {
	containerStyle: {
		flex: 1,
		top: 25,
		width: DEVICE_WIDTH,
		flexDirection: 'row',
		justifyContent: 'space-around',
	}
};

export { SignupSection };
