import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
// import { ThemeProvider } from 'react-jss';

import { store, persistor } from 'store';

import App from 'App';

// import darkTheme from 'styles/themes/dark';

const renderRoot = Component => {
  const root = document.getElementById('root');

  if (root) {
    ReactDOM.render(
      <AppContainer>
        {/*<ThemeProvider theme={darkTheme}>*/}
        <Provider store={store}>
          <PersistGate
            loading={<div>Loading...</div>}
            persistor={persistor}
          >
            <Component />
          </PersistGate>
        </Provider>
        {/*</ThemeProvider>*/}
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
