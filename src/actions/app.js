import { createActions } from 'redux-actions';

export const {
  isRunning,
} = createActions({
  IS_RUNNING: payload => payload,
});
