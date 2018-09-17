import { SEARCH_PLANET } from './constants';
import { searchPlanetResult } from './actions';
import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import {
   searchPlanet
} from '../../api';

/**
 * Handle the search request and dispatch further action based on the ajax 
 * response.
 *
 * @param {*} action
 */
function* handleSearch(action) {
   try {
      const planetData = yield call(searchPlanet, action);
      yield put(searchPlanetResult(planetData));
    } catch (e) {
      yield put(searchPlanetResult(e.message));
    }
}

/** Listen for SEARCH_PLANET action */
export function* doPlanetSearchSaga() {
  yield* takeLatest(SEARCH_PLANET, handleSearch);
}

// All sagas to be loaded
export default [
  doPlanetSearchSaga
];
