import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './reducers/todoReducer';

const reducers = combineReducers({
  todoReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
