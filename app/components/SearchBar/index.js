/**
*
* SearchBar
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import messages from './messages';
import styles from './styles.css';
import {
   MAX_SEARCH_LIMIT, ADMIN_USER_NAME, SEARCH_BLOCKED_TIME
} from './constants';

class SearchBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
   static propTypes = {
      searchPlanet: React.PropTypes.func.isRequired
   };

   /** Initialize state */
   state = {};

   /** Holds previous searches time */
   searchArr = [];

   /**
    * Listen to the search input change, performs validation and 
    * make search action.
    *
    * @memberof SearchBar
    */
   handleChange = () => event => {
      let value = event.target.value;
      let dateNow = Date.now();
      // validate for search count
      if (this.searchArr.length === MAX_SEARCH_LIMIT &&
         this.props.loggedInPeople.name !== ADMIN_USER_NAME) {
         let lastSearchedTime = this.searchArr.shift();
         if (dateNow - lastSearchedTime < SEARCH_BLOCKED_TIME) {
            this.setState({
               error: `More than ${MAX_SEARCH_LIMIT} searches not allowed`
            });
            this.searchArr.push(dateNow);
            return;
         } else {
            this.setState({
               error: ''
            });
         }
      }
      this.searchArr.push(dateNow);
      // validate for previous search.
      this.setState(function (prev, props) {
         if (value && value !== this.state.search) {
            this.props.searchPlanet(value);
         } else if (!value) {
            this.props.clearPlanetList();
         }
         return { 'search': value };
      });
   };

   render() {
      return (
         <div className={classNames(styles.searchBar, this.state.error ? styles.errorInput : '')}>
            <FormattedMessage {...messages.searchPlaceholder}>{
               placeholder =>
                  <input
                     className={styles.searchInput}
                     placeholder={placeholder}
                     onChange={this.handleChange()}
                     title={this.state.error}
                  />
               }
            </FormattedMessage>
         </div>
      );
   }
}

export default SearchBar;
