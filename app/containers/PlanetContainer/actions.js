/*
 *
 * PlanetContainer actions
 *
 */

import {
  SEARCH_PLANET, SEARCH_PLANET_RESULT, CLEAR_PLANET_LIST
} from './constants';

/**
 * Action for search planet.
 *
 * @export
 * @param {*} name
 * @returns
 */
export function searchPlanet(name) {
  return {
      type: SEARCH_PLANET,
      name
  };
}

/**
 * Action for clearing planet list.
 *
 * @export
 * @returns
 */
export function clearPlanetList() {
   return {
      type: CLEAR_PLANET_LIST
   }
}

/**
 * Action for notifying planet search result.
 *
 * @export
 * @param {*} planetData
 * @returns
 */
export function searchPlanetResult(planetData) {
   return {
       type: SEARCH_PLANET_RESULT,
       planetData
   };
 }