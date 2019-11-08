import AsyncStorage from '@react-native-community/async-storage';
import {BASE_URL} from "../../config";

const login = (email, password) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    };

    return fetch(`${BASE_URL}/auth/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage
            // to keep user logged in between page refreshes
            AsyncStorage.setItem('user', JSON.stringify(user));

            return user;
        });
};

const logout = () => {
    // remove user from local storage to log user out
    AsyncStorage.removeItem('user');
};

const handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
};

export const userService = {
    login,
    logout,
};