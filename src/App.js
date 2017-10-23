import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { RootNavigator } from './AppRouter';
import rootReducer from './data/reducers/rootReducer';

class App extends Component {
    render() {
    const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
    const isSignIn = true;
    const Layout = RootNavigator(isSignIn);

        return (
            <Provider store={store}>
                <Layout />
            </Provider>
        );
    }
}

export default App;

