import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FlashLogo, Spinner } from '../../components/common';
import Wallpaper from '../../components/specific/Wallpaper';
import { userReloginRequest } from '../../../process/actions/auth/loginActions';

class FlashLandingScreen extends Component {

    componentDidMount() {
        if (timerid) {
            clearTimeout(timerid);
        }
        const timerid = setTimeout(() => {
            this.isAuthenticated();
        }, 3000);
    }

    isAuthenticated() {
        const { isAuthenticated } = this.props.userLogin;
        console.log('LANDING SCREEN isAuth status ' + isAuthenticated);
        if (!isAuthenticated) {
            this.props.navigation.navigate('Authentication');
        } else {
            this.props.userReloginRequest();
            if (timerid) {
                clearTimeout(timerid);
            }
            const timerid = setTimeout(() => {
                this.props.navigation.navigate('Main');
            }, 3000);
        }
    }

    render() {
        return (
            <Wallpaper>
                <FlashLogo />
                <Spinner />
            </Wallpaper>
        );
    }
}

const mapStateToProps = (state) => {
    const { userLogin } = state;

    return { 
        userLogin 
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userReloginRequest
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashLandingScreen);
