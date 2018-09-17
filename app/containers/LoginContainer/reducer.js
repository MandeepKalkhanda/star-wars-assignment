/*
 *
 * LoginContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN_SUCCESS, LOGIN_FAILED
} from './constants';

/** Default value or sent from server */
const initialState = fromJS({});

/**
 * Update the state with loggedInPeople field on login success.
 * Set state to error with proper message in case of login failure.
 *
 * @param {*} [state=initialState]
 * @param {*} action
 * @returns
 */
function loginContainerReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
        return state.set('loggedInPeople', action.peopleData);
     case LOGIN_FAILED: 
        return state.set('error', {
           user: action.name,
           message: action.message
        })
    default:
      return state;
  }
}

export default loginContainerReducer;
