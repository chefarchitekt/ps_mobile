import React, { Component } from 'react';
import { Image } from 'react-native';

import wallImg from '../../images/psWallpaper.jpg';
import { mobileMetrics } from '../../../views/config';

const IMAGE_WIDTH = mobileMetrics.DEVICE_WIDTH;
const IMAGE_HEIGHT = mobileMetrics.DEVICE_HEIGHT;

class Wallpaper extends Component {
    render() {
        return (
            <Image style={styles.picture} source={wallImg}>
                {this.props.children}
            </Image>
        );
    }  
}

const styles = {
    picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
};

export default Wallpaper;

