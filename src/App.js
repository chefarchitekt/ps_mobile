import React, { Component } from 'react';
import { RootNavigator } from './AppRouter';


class App extends Component {
    render() {
    const isSignIn = true;
    const Layout = RootNavigator(isSignIn);

        return (
            <Layout />
        );
    }
}

export default App;

