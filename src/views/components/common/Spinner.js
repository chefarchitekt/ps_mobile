import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ sizeProp }) => (
        <View style={styles.activityStyle}>
            <ActivityIndicator size={sizeProp || 'large'} />
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
