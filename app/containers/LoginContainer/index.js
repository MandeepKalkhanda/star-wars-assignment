/*
 *
 * LoginContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLoginContainer from './selectors';
import Login from '../../components/Login';
import { login } from './actions';

export class LoginContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Login {...this.props} />
      </div>
    );
  }
}

/** Props mapper */
const mapStateToProps = selectLoginContainer();

/** Props callback mapper. */
function mapDispatchToProps(dispatch) {
  return {
    login: (name, password) => dispatch(login(name, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
