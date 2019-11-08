import * as types from './types';
import {userService} from '../services';

const setLoggedInState = loggedInState => (
    {
        type: types.SET_LOGGED_IN_STATE,
        loggedInState,
    }
);

const logIn = (email, password) => {
    return (dispatch) => {

        return userService.login(email, password)
            .then(
               user => {
                    dispatch(setLoggedInState(true));
                },
                error => {
                    dispatch(setLoggedInState(false));
                }
            );
    };
};

const logout= () => {
    userService.logout();
};

export {logIn, logout, setLoggedInState,};
