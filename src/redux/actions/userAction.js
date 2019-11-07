import * as types from './types';
import user from '../../data/user.json';
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
import {BASE_URL} from "../../config";

axios.interceptors.request.use(request => {
  return request
});

axios.interceptors.response.use(response => {
  return response
});
const setLoggedInState = loggedInState => (
  {
    type: types.SET_LOGGED_IN_STATE,
    loggedInState,
  }
);

const logIn = (email, password) => {
  return (dispatch) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    };

    return fetch(`${BASE_URL}/users/authenticate`, requestOptions)
        .then(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          AsyncStorage.setItem('user', JSON.stringify(user));
          if(user){
              dispatch(setLoggedInState(false));
              return false;
          }else{
            dispatch(setLoggedInState(false));
            return false;
          }
        });
  };
};

export {logIn, setLoggedInState,};
