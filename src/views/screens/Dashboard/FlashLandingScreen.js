import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Wallpaper, FlashLogo, Spinner } from '../../components/common';
import { checkAuthenticationStatus } from '../../../process/actions/auth/loginActions';

class FlashLandingScreen extends Component {
    
   componentDidMount() {
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
                <Spinner spinnerSize={100} />                
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
