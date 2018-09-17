/*
 *
 * PlanetContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
   SEARCH_PLANET_RESULT, CLEAR_PLANET_LIST
} from './constants';

/** Default value or sent from server */
const initialState = fromJS({});

/**
 * Populate the planetList field with data recieved from server,
 * also clear it for clear action.
 *
 * @param {*} [state=initialState]
 * @param {*} action
 * @returns
 */
function planetContainerReducer(state = initialState, action) {
   switch (action.type) {
      case SEARCH_PLANET_RESULT:
         return state.set('planetList', action.planetData);
      case CLEAR_PLANET_LIST:
         return state.set('planetList', null);
      default:
         return state;
   }
}
export default planetContainerReducer;
