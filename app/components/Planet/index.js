/**
*
* Planet
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import SearchBar from '../../components/SearchBar'

import messages from './messages';
import styles from './styles.css';
import { UNKNOWN_VALUE, DEFAULT_FONT_SIZE, PX } from './constants';

function Planet(props) {
   let maxPopuplation = 0;
   let pl = props.planetList;

   // get the max population out there in list.
   // will be used for showing relative font size.
   if (pl && pl.count > 0) {
      pl.results.forEach(element => {
         if (element.population === UNKNOWN_VALUE) {
            element.population = 0;
         }
         if (+element.population > maxPopuplation) {
            maxPopuplation = +element.population;
         }
      });
   }
   // generate list of planets.
   const planetsList = pl && pl.count > 0 ?
      pl.results.map(l => (
         <div
            key={l.url}
            className={styles.planetListItem}
            style={{
               // make font size relative.
               fontSize: l.population === 0 ? DEFAULT_FONT_SIZE + PX :
                  (DEFAULT_FONT_SIZE + (DEFAULT_FONT_SIZE * l.population / maxPopuplation)) + PX
            }}
         >
            <span>{l.name}</span>
            &nbsp;
            <span>{l.population}</span>
         </div>
      )) : pl && pl.count === 0 ?
         <h3>
            <FormattedMessage {...messages.noRecordsMessage} />
         </h3> :
         null;

   return (
      <div className={styles.planet}>
         <h1>
            <FormattedMessage {...messages.greeting} />
            {props.loggedInPeople.name}</h1>
         <SearchBar {...props} />
         {planetsList}
      </div>
   );
}

export default Planet;
