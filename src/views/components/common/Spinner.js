import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ spinnerSize }) => (
        <View style={styles.activityStyle}>
            <ActivityIndicator size={spinnerSize || 'large'} />
        </View>
   );

const styles = {
    activityStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner };
