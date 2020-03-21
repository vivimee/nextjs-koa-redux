import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';

export const myCreateStore = (preloadState, pageReducer) => {
  return createStore(
    pageReducer,
    preloadState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
