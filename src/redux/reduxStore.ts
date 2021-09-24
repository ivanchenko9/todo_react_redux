import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import routeReducer from './reducers/routeReducer';
import todoReducer from './reducers/todoReducer';

const reducers = combineReducers({
  routeReducer,
  todoReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
