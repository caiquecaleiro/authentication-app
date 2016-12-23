import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';

import Input from '../Input';

class SignIn extends Component {
  onSubmit(props) {
    console.log(props);
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
  handleSubmit: PropTypes.func.isRequired 
}

export default reduxForm({
  form: 'signIn'
})(SignIn);