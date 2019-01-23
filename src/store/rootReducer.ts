import { combineReducers } from 'redux';
import IAppState from 'src/store/IAppState';
import { reducer as consentReducer } from '../ducks/consent';

const rootReducer = combineReducers<IAppState>({
  consent: consentReducer,
});

export default rootReducer;
