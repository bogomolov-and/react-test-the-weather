import {
  applyMiddleware,
  compose,
  createStore,
  combineReducers,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootSaga from 'sagas';
import rootReducer from 'reducers';

import middleware, { sagaMiddleware } from 'store/middleware';

const reducer = persistReducer(
  {
    key: 'septt', // key is required
    storage, // storage is now required
    whitelist: [
      'app',
      'weather',
    ],
  },
  combineReducers({ ...rootReducer }),
);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState = {}) => {
  const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(
      ...middleware
    )),
  );

  sagaMiddleware.run(rootSaga);

  return {
    persistor: persistStore(store),
    store,
  };
};

export const { persistor, store } = configureStore();
