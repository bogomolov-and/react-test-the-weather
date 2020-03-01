import React from 'react';
import { render } from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persistor } from 'store';

require('react-hot-loader/patch');

import App from 'App';

const renderRoot = Component => {
  const root = document.getElementById('root');

  if (root) {
    render(
      <AppContainer>
        <Provider store={store}>
          <PersistGate
            loading={<div>Loading...</div>}
            persistor={persistor}
          >
            <Component />
          </PersistGate>
        </Provider>
      </AppContainer>,
      root
    );
  }
};

renderRoot(App);

if (module.hot) {
  module.hot.accept(
    'App',
    () => renderRoot(App)
  );
}
