import { combineReducers } from 'redux';
import * as navReducer from './navReducer';

export default combineReducers(Object.assign(
    navReducer
));
