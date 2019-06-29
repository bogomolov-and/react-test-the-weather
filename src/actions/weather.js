import { createActions } from 'redux-actions';

export const {
  getWeather,
  setWeather,
} = createActions(
  'GET_WEATHER',
  'SET_WEATHER',
);
