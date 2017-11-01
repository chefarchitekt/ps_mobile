import React, { Component } from 'react';
import { View, Text } from 'react-native-elements';



class CallDialupScreen extends Component {
    componentDidMount() {
        const { params } = this.props.navigation.state;
        console.log('NAV PARAM: ' + params.name);
    }
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text h2>Call Dialup</Text>
                <Text h3>{params.name}</Text>
            </View>
        );
    }
}

export default CallDialupScreen;
