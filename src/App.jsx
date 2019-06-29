import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { createBrowserHistory } from 'history';

// routes
import List from 'containers/List';
import Detail from 'containers/Detail';

import useGlobalStyles from 'styles';

const history = createBrowserHistory();

const App = () => {
  useGlobalStyles();

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/:id" component={Detail} />
        <Route render={() => <div>404</div>} />
      </Switch>
    </Router>
  );
};

App.displayName = 'App';

export default hot(App);
