import axios from "axios";
import jwt_decode from "jwt-decode";
import AsyncStorage from '@react-native-community/async-storage';
import authToken from "../../utils/authToken";
import {alertConstants} from '../constants/alertConstants';
import {userConstants} from "../constants/userConstants";

axios.interceptors.request.use(request => {
    return request
});

axios.interceptors.response.use(response => {
    return response
});

/**
 * Login user
 *
 * @param user
 * @returns {Function}
 */
export const login = user => {
    return dispatch => {
        axios.post(`https://node-express-244.herokuapp.com/auth/login`, user)
            .then(res => {
                // save to end point
                const {accessToken} = res.data;
                // set token to AS
                AsyncStorage.setItem("jwtToken", accessToken);
                //set token to auth header
                authToken(accessToken);
                //decode token to get user data
                const decoded = jwt_decode(accessToken);
                //set current user
                dispatch(loggedInAs(decoded));
            })
            .catch(err => {
                if (err.response) {
                    dispatch({
                        type: alertConstants.ERROR,
                        payload: err.response.data.error
                    });
                } else {
                    dispatch({
                        type: alertConstants.ERROR,
                        payload: "Oops! We encountered an error. Please try again later."
                    });
                }
            });
    }
};

/**
 * log out user
 *
 * @returns {Function}
 */
export const logout = () => dispatch => {
    //remove token from local storage
    AsyncStorage.removeItem("jwtToken");
    //remove auth header for future requests
    authToken(false);
    //set current user to {} which will set isAuthenticated to false
    dispatch(loggedInAs({}));
};

/**
 * set logged in user
 *
 * @param decoded
 * @returns {{payload: *, type: *}}
 */
export const loggedInAs = decoded => {
    return {
        type: userConstants.LOGGED_USER,
        payload: decoded
    };
};
