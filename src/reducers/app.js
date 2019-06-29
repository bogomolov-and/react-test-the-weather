import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { isRunning } from 'actions';

import { appState } from 'constants/defaultStore';

export default {
  app: handleActions({
    [isRunning]: state => immutable(state, {
      isRunning: { $set: !state.isRunning },
    }),
  }, appState),
};
