import { handleActions } from 'redux-actions';

import { setWeather } from 'actions';

export default {
  weather: handleActions({
    [setWeather]: (state, { payload }) => payload,
  }, {}),
};
