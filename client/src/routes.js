import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';
import SignUp from './components/auth/SignUp';
import RequireAuth from './components/auth/RequireAuth';
import Feature from './components/Feature';

export default (
  <Route path="/" component={App}>
    <Route path="signin" component={SignIn} />
    <Route path="signout" component={SignOut} />
    <Route path="signup" component={SignUp} />
    <Route path="feature" component={RequireAuth(Feature)} />
  </Route>
);