import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const NavigationText = ({ navigationKey, children }) => {
    const handleOnPress = () => {
        //this navigation props does not work
        //maybe need to use redux navigation
        this.props.navigation.navigate(navigationKey);
    };

    const { textStyle } = styles;
    return (
        <TouchableOpacity onPress={handleOnPress}>
            <Text style={textStyle} onPress={this.handleOnPress}>
                { children }
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

//same as export { Button: Button};
export { NavigationText };
