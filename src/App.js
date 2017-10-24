import '../reactotron-config';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { RootNavigator } from './AppRouter';
import rootReducer from './data/reducers/rootReducer';
import { 
    isSignIn
} from './services/storageServices';

class App extends Component {
    
    render() {
    //const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
    const store = createStore(
        rootReducer, {}, //root reducer(function that takes state and action and return NEW STATE)
        //2nd parameter is an initial state which do not have or could not need
         //apply middleware. We use thunk to dispatch asynch action.
        compose(
            applyMiddleware(ReduxThunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f // if we have this tool we initialize it
        )
    );
    
    const signInStatus = isSignIn();
    console.log('APP: SIGNIN STATUS: ');
    console.log(signInStatus);
    const Layout = RootNavigator(signInStatus);

        return (
            <Provider store={store}>
                <Layout />
            </Provider>
        );
    }
}

export default App;

