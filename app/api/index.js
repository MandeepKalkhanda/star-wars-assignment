import {
   BASE_URL,
} from './constants';

/**
 * Search the people in the peoples list.
 *
 * @export
 * @param {*} { name } String 
 * @returns
 */
export function searchUser({ name }) {
   return searchFor('people', name);
}

/**
 * Search the planet in the planets list.
 *
 * @export
 * @param {*} { name } String 
 * @returns
 */
export function searchPlanet({ name }) {
   return searchFor('planets', name);
}

/**
 * Make the API call to the server and return response in json decoded form.
 *
 * @param {*} field
 * @param {*} name
 * @returns
 */
function searchFor(field, name) {
   return fetch(`${BASE_URL}${field}/?search=${name}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
         'Content-Type': 'application/json',
         'User-Agent': 'swapi-javascript'
      },
    }).then(response => response.json());
}