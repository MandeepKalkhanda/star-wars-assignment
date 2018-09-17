/*
 *
 * LoginContainer actions
 *
 */

import {
  LOGIN, LOGIN_SUCCESS, LOGIN_FAILED
} from './constants';

/**
 * Action for making login call.
 *
 * @export
 * @param {*} name
 * @param {*} password
 * @returns
 */
export function login(name, password) {
  return {
      type: LOGIN,
      name,
      password
  };
}

/**
 * Action for notifying login success.
 *
 * @export
 * @param {*} peopleData
 * @returns
 */
export function loginSuccess(peopleData) {
   return {
      type: LOGIN_SUCCESS,
      peopleData
   };
 }
 
 /**
  * Action for notifying login failure.
  *
  * @export
  * @param {*} name
  * @param {*} message
  * @returns
  */
 export function loginFailed(name, message) {
   return {
     type: LOGIN_FAILED,
     name,
     message,
   };
 }
 