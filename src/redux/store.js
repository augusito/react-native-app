import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/userReducer';
import errorReducer from './reducers/errorReducer';

const middleware = [thunk];

const store = createStore(
    combineReducers({
        auth: authReducer,
        errors: errorReducer,
    }),
    {},
    compose(
        applyMiddleware(...middleware)
    )
);

export default store;