import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import logoImg from '../../images/psLogo.png';
import { mobileMetrics } from '../../../views/config';

const IMAGE_WIDTH = mobileMetrics.DEVICE_WIDTH;

const ScreenLogo = () => {
	return (
			<View style={styles.container}>
				<Image source={logoImg} style={styles.image} />
				{/*<Text style={styles.text}>{}</Text>*/}
			</View>
		);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		flex: 1,
        height: null,
        width: IMAGE_WIDTH,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginVertical: 3
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		marginTop: 20,
	}
});

export { ScreenLogo };

