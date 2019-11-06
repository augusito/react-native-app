import {alertConstants} from "../constants/alertConstants";

export default function (state = {}, action) {
    if (action.type === alertConstants.ERROR) {
        return action.payload;
    } else {
        return state;
    }
}