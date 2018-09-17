/**
*
* Login, no submit, request progressor and validations.
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import styles from './styles.css';
import {
   NAME_FIELD_TYPE, PASSWORD_FIELD_TYPE, NAME_INPUT, PASSWORD_INPUT
} from './constants';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
   static propTypes = {
      login: React.PropTypes.func.isRequired,
   };

   /**
    * Initial state
    *
    * @memberof Login
    */
   state = {};

   /**
    * Change handler for input form.
    *
    * @memberof Login
    */
   handleChange = name => event => {
      this.setState({ [name]: event.target.value });
   };

   /**
    * Login action trigger.
    *
    */
   login = () => {
      this.props.login(this.state.name, this.state.password);
   };

   render() {
      return (
         <div className={styles.login}>
            <div
               className={styles.heading}
            >
               <FormattedMessage {...messages.header} />
            </div>

            <FormattedMessage {...messages.userNamePlaceholder}>{
               placeholder =>
                  <input
                     className={styles.input}
                     placeholder={placeholder}
                     onChange={this.handleChange(NAME_INPUT)}
                     type={NAME_FIELD_TYPE}
                  />
            }
            </FormattedMessage>

            <FormattedMessage {...messages.passwordPlaceholder}>{
               placeholder =>
                  <input
                     className={styles.input}
                     placeholder={placeholder}
                     onChange={this.handleChange(PASSWORD_INPUT)}
                     type={PASSWORD_FIELD_TYPE}
                  />
            }
            </FormattedMessage>
            <span
               className={styles.errorMessage}
            >
               {this.props.error && this.props.error.message}
            </span>
            <div
               className={styles.actionContainer}
            >
               <button
                  className={styles.button}
                  onClick={this.login}
               >
                  <FormattedMessage {...messages.loginButton} />
               </button>
            </div>
         </div>
      );
   }
}

export default Login;
