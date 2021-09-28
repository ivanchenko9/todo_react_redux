import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import todoReducer from './reducers/todoReducer';
import fetchTodosWatcher from '../saga/todosSaga';

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
  todoReducer,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fetchTodosWatcher);
// const store = createStore(reducers, applyMiddleware(thunk));

export default store;
