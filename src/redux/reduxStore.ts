import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import todoReducer from './reducers/todoReducer';
import authReducer from './reducers/authReducer';
import snakbarReducer from './reducers/snakbarReducer';
import rootWatcher from '../saga/index';

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
  todoReducer,
  authReducer,
  snakbarReducer,
});

const store = createStore(reducers, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(rootWatcher);
// const store = createStore(reducers, applyMiddleware(thunk));

export default store;
