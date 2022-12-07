import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "../Reducer/reducer";


export const store = legacy_createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

export default store;