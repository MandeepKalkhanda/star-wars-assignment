/*
 * Login Messages
 *
 * This contains all the text for the Login component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
   header: {
      id: 'app.components.Login.header',
      defaultMessage: 'Enter Name as User Name and Birth year as Password',
   },
   userNamePlaceholder: {
      id: 'app.components.Login.userNamePlaceholder',
      defaultMessage: 'User Name',
   },
   passwordPlaceholder: {
      id: 'app.components.Login.passwordPlaceholder',
      defaultMessage: 'Password',
   },
   loginButton: {
      id: 'app.components.Login.loginButton',
      defaultMessage: 'Log In',
   },
});
