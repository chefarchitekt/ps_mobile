import '../reactotron-config';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Routes } from './RootNavigator';
import rootReducer from './data/reducers/rootReducer';
import { checkAuthenticationStatus } from './process/actions/auth/loginActions';

class App extends Component {
    constructor(props) {
        super(props);
        this.store = createStore(
            rootReducer, {}, //root reducer(function that takes state and action and return NEW STATE)
            //2nd parameter is an initial state which do not have or could not need
             //apply middleware. We use thunk to dispatch asynch action.
            compose(
                applyMiddleware(ReduxThunk),
                window.devToolsExtension ? window.devToolsExtension() : f => f // if we have this tool we initialize it
            )
        ); 
        this.store.dispatch(checkAuthenticationStatus());
        const initialState = this.store.getState();
        console.log('initialState at App constructor: ', initialState);
    }

    
    render() {
        //const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
       
        //const AppRouter = Routes();
        return (
            <Provider store={this.store}>
                <Routes />
            </Provider>
        );
    }
}

export default App;

