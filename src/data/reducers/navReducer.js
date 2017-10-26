//import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../../RootNavigator';

const INITIAL_STATE = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams('Authentication'));

export default (state = INITIAL_STATE, action) => {
    const nextState = RootNavigator.router.getStateForAction(action, state);
    return nextState | state;
};

/*
import {
    LOGIN_USER_SUCCESS,
    USER_SIGNOUT,
    STORED_CREDENTIAL_EXIST,
    STORED_CREDENTIAL_EMPTY
} from '../../process/types/appTypes';


// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = RootNavigator.router.getActionForPathAndParams('Main');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const secondAction = RootNavigator.router.getActionForPathAndParams('Authentication');
const INITIAL_STATE = RootNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

export default (state = INITIAL_STATE, action) => {
  let nextState;
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case STORED_CREDENTIAL_EXIST:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case STORED_CREDENTIAL_EMPTY:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Authentication' }),
        state
      );
    break;
    case USER_SIGNOUT:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Authentication' }),
        state
        );
    break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
*/
