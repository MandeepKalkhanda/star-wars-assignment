import { LOGIN } from './constants';
import { loginSuccess, loginFailed} from './actions';
import { call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import {
   searchUser
} from '../../api';

/**
 * Handle the login request and dispatch further action based on the ajax 
 * response.
 *
 * @param {*} action
 */
function* handleLogin(action) {
   try {
      // API call for search.
      let userData = yield call(searchUser, action);
      let resultArr = userData.results;
      if (userData.count === 0) {
         yield put(loginFailed(action.name, 'No such user name'));
      } else {
         // has more than one page in result.
         while (userData.next) {
            let nextQuery = userData.next.split('?search=')[1];
            userData = yield call(searchUser, nextQuery);
            // concat all people list with matching names.
            resultArr = [...resultArr, ...userData.results];
         }
         let userFound = false;
         for (let i = 0, len = resultArr.length; i < len; i++) {
            let user = resultArr[i];
            if (user.name === action.name &&
               user.birth_year === action.password) {
               userFound = true;
               yield put(loginSuccess(user));
               yield put(push(`/planet`));
            }
         }
         if (!userFound) {
            yield put(loginFailed(action.name, 'Check name and birth year combination'));
         }
      }
    } catch (e) {
      yield put(loginFailed(action.name, e.message));
    }
}

/** listen for LOGIN action */
export function* doLoginSaga() {
  yield* takeLatest(LOGIN, handleLogin);
}

// All sagas to be loaded
export default [
  doLoginSaga
];
