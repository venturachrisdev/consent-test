import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';
import IAppState from './IAppState';

const enhancer = composeWithDevTools(
  applyMiddleware(reduxThunk),
);
const store = createStore<IAppState, any, any, any>(rootReducer, enhancer);

export default store;
