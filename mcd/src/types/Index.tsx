import { ActionType, StateType } from 'typesafe-actions';

// Root reducer
import { rootReducer } from '../reducers/Index';

// Actions
import { McInfoAction } from '../reducers/McInfoReducer'

// Root state of the app
export type RootState = StateType<typeof rootReducer>;

// Root actions
export type RootAction = McInfoAction;