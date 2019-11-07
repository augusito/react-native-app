import React from 'react';
import {applyMiddleware, compose, createStore} from 'redux';
import {createReactNavigationReduxMiddleware, createReduxContainer,} from 'react-navigation-redux-helpers';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {connect} from 'react-redux';
import reducer from '../redux/reducers';
import AppRouteConfigs from "./AppRouteConfigs";

const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
);

const App = createReduxContainer(AppRouteConfigs);
const mapStateToProps = (state) => ({
    state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const loggerMiddleware = createLogger({predicate: () => __DEV__});

const configureStore = (initialState) => {
    const enhancer = compose(
        applyMiddleware(
            middleware,
            thunkMiddleware,
            loggerMiddleware,
        ),
    );
    return createStore(reducer, initialState, enhancer);
};

const Root = () => <AppWithNavigationState/>;

export {configureStore, Root};
