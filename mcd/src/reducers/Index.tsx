import { combineReducers } from 'redux';

import { mcInfoActionReducer } from './McInfoReducer';

export const rootReducer = combineReducers({
  mcinfo: mcInfoActionReducer,
});