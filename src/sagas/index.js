import { all, fork } from 'redux-saga/effects';

import weather from 'sagas/weather';

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(weather),
  ]);
}
