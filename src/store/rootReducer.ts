import { combineReducers } from 'redux';
import IAppState from './IAppState';
import { reducer as consentReducer } from '../ducks/consent';

const rootReducer = combineReducers<IAppState>({
  consent: consentReducer,
});

export default rootReducer;
