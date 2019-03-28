import * as reducers from './reducers';
import { combineReducers, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const objetAppReducer = combineReducers(reducers);
const middleware = [thunkMiddleware];

const store = createStore(objetAppReducer, composeWithDevTools(
  applyMiddleware(...middleware),
));

export default store;