import { createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import bankReducer from './reducers/bankReducer';
import productReducer from './reducers/products-reducer';

const appReducers = combineReducers({
  bank : bankReducer,
  products : productReducer
})
export const store = createStore(appReducers,applyMiddleware(thunk));
