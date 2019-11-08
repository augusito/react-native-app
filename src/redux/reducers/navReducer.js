import * as types from '../actions/types';
import AppRouteConfigs from '../../app/AppRouteConfigs';

const firstAction = AppRouteConfigs.router.getActionForPathAndParams('LogIn');
const initialNavState = AppRouteConfigs.router.getStateForAction(firstAction);

const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
};

const loggedInStatus = createReducer({}, {
  [types.SET_LOGGED_IN_STATE](state, action) {
    return action;
  },
});

const nav = (state = initialNavState, action) => {
  const nextState = AppRouteConfigs.router.getStateForAction(action, state);

  return nextState || state;
};

export {
  loggedInStatus,
  nav,
};
