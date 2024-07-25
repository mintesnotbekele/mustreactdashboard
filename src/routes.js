import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Dashboard} from './components/Dashboard';
import Settings from './pages/Settings';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/settings" component={Settings} />
  </Switch>
);

export default Routes;
