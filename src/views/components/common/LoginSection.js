import React from 'react';
import { View } from 'react-native';
import { mobileMetrics } from '../../../views/config';
import { NavigationText } from './index';

const DEVICE_WIDTH = mobileMetrics.DEVICE_WIDTH;
//const DEVICE_HEIGHT = mobileMetrics.DEVICE_HEIGHT;

const LoginSection = () => {
    return (
    <View style={styles.containerStyle}>
        <NavigationText navigationKey='NavLogin' {...this.props}>Back to Login</NavigationText>
        <NavigationText navigationKey='NavSignupDesc'  {...this.props}>Forgot Password?</NavigationText>
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

export { LoginSection };
