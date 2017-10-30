import '../reactotron-config';

import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Routes } from './RootNavigator';
import { NavigationActions } from 'react-navigation';
import rootReducer from './data/reducers/rootReducer';
import { checkAuthenticationStatus } from './process/actions/auth/loginActions';


export let navigationRef;
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
        this.handleBackButton = this.handleBackButton.bind(this);
    }

    
    componentDidMount() {
        navigationRef = this.navigator;
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        navigationRef.dispatch(NavigationActions.navigate({ 
            routeName: 'Main'
        }));
    }

    render() {
        //const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
       
        //const AppRouter = Routes();
        return (
            <Provider store={this.store}>
                <Routes ref={nav => { this.navigator = nav; }} />
            </Provider>
        );
    }
}

export default App;

