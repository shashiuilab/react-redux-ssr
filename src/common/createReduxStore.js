import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reduxState from '../store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger();

export default function createReduxStore({ preloadedState, server } = {}) {
  let enhancer;

  if (process.env.NODE_ENV !== 'production' && !server) {
    enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware));
  } else {
    enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
  }

  return createStore(reduxState, preloadedState, enhancer);
}