import React, { Component } from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FlashLogo, Spinner } from '../../components/common';
import Wallpaper from '../../components/specific/Wallpaper';
import { checkAuthenticationStatus } from '../../../process/actions/auth/loginActions';

class FlashLandingScreen extends Component {
    
   componentDidMount() {
    if (timerid) {
        clearTimeout(timerid);
      }
      
      const timerid = setTimeout(() => {
        this.isAuthenticated();
      }, 2000);
    }

    isAuthenticated() {
        const { isAuthenticated } = this.props.userLogin;
        console.log('LANDING SCREEN isAuth status ' + isAuthenticated);
        if (!isAuthenticated) {
            this.props.navigation.navigate('Authentication');
        } else {
            this.props.navigation.navigate('Main');
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
    const userLogin = state.userLogin;

    return {
        userLogin
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        checkAuthenticationStatus
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashLandingScreen);
