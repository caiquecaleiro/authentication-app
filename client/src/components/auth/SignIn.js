import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { signInUser } from '../../actions/index';

import Input from '../Input';

class SignIn extends Component {
  onSubmit(props) {
    this.props.signInUser(props);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <fieldset className="form-group">
          <Field 
            name="email"
            type="email"
            label="Email"
            component={Input}
          />
          <Field
            name="password"
            type="password"
            label="Password"
            component={Input}
          />
        </fieldset>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signInUser: PropTypes.func.isRequired
}

export default connect(null, { signInUser })(reduxForm({
  form: 'signIn'
})(SignIn));