import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//beware of the right path
import { userLogoutRequest } from '../../../process/actions';
//any validator

class ReduxTempalteForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        return;
    }

    onSubmit(e) {
        const { user } = this.props.userLogin.user;
        e.preventDefault();
        console.log(user);
    }

    isValid() {
        return;
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <Text>Sample Redux Form</Text>
                <Button onPress={this.onSubmit} />
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        flux: 1
    }
};

const mapStateToProps = (state) => {
    const userLogin = state.userLogin;
    //another redux state object assignment
    return {
        userLogin
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userLogoutRequest
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTempalteForm);
