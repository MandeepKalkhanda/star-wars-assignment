import { createSelector } from 'reselect';
import selectLoginContainer from '../LoginContainer/selectors';

/**
 * Direct selector to the planetContainer state domain
 */
const selectPlanetContainerDomain = () => state => state.get('planetContainer');

/**
 * Other specific selectors
 */

/**
 * Default selector used by planetContainer
 */

const selectPlanetContainer = () => createSelector(
  selectPlanetContainerDomain(),
  selectLoginContainer(),
  (substate, loginSubstate) => Object.assign(substate.toJS(), loginSubstate)
);

export default selectPlanetContainer;
export {
  selectPlanetContainerDomain,
};
