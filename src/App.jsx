import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { createBrowserHistory } from 'history';

// routes
import List from 'containers/List';
import Detail from 'containers/Detail';
import NotFound from 'containers/NotFound';

import useGlobalStyles from 'styles';

const history = createBrowserHistory();

const App = () => {
  useGlobalStyles();

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact><List /></Route>
        <Route path="/404"><NotFound /></Route>
        <Route path="/:id"><Detail /></Route>
      </Switch>
    </Router>
  );
};

App.displayName = 'App';

export default hot(module)(App);
