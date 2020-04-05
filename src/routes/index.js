import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';

import Main from '~/pages/Main';
import Login from '~/pages/Login';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Main} isPrivate />
    </Switch>
  );
};

export default Routes;
