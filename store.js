import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

export const createStore = (preloadState, pageReducer) => {
  return reduxCreateStore(
    pageReducer,
    preloadState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};

export const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    return handlers[action.type] ? handlers[action.type](state, action) : state;
  };
};
