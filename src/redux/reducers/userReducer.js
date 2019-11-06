import {userConstants} from "../constants/userConstants";

const initialState = {
    loggedIn: false,
    user: {}
};

export default function (state = initialState, action) {
    if (action.type === userConstants.LOGGED_USER) {
        return {
            ...state,
            loggedIn: true,
            user: action.payload
        };
    } else {
        return state;
    }
}