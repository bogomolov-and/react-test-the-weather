import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import { getWeather, setWeather, isRunning } from 'actions';

import { weatherUrl } from 'constants/index';

import {
  onServerGet,
} from 'helpers';

export function* getWeatherSaga({ payload }) {
  try {
    yield put(isRunning());
    const query = { format: 'json', u: 'c', ...payload };
    const data = yield call(onServerGet, weatherUrl, query);

    yield put(setWeather(data));

    yield put(isRunning());
  } catch (err) {
    // error handler
    yield put(isRunning());
  }
}

export default function* root() {
  yield all([
    takeLatest(getWeather.toString(), getWeatherSaga),
  ]);
}
