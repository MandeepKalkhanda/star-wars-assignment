/**
*
* PlanetContainer
*
*/

import React from 'react';
import { connect } from 'react-redux';
import selectPlanetContainer from './selectors';
import { searchPlanet, clearPlanetList } from './actions';
import styles from './styles.css';

import Planet from '../../components/Planet';


class PlanetContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
   render() {
      return (
         <div className={styles.planetContainer}>
            <Planet {...this.props}/>
         </div>
      );
   }
}

/** Props mapper */
const mapStateToProps = selectPlanetContainer();

/** Props callback mapper. */
function mapDispatchToProps(dispatch) {
  return {
     searchPlanet: (name) => dispatch(searchPlanet(name)),
     clearPlanetList: () => dispatch(clearPlanetList())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetContainer);
