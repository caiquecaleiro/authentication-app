import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';

export default (
  <Route path="/" component={App}>
    <Route path="signin" component={SignIn} />
    <Route path="signout" component={SignOut} />
  </Route>
);