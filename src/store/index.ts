import todoReducer from "../module/todo";
import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux';

export const rootReducer=combineReducers({todoReducer})

const store=()=>{
  const store = createStore(
    rootReducer,composeWithDevTools(),
  );
  return store;
}

export default store;