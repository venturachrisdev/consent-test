import { combineReducers } from 'redux';
import IAppState from 'src/store/IAppState';
import { default as consentReducer } from '../ducks/consent/reducer';

const rootReducer = combineReducers<IAppState>({
  consent: consentReducer,
});

export default rootReducer;
