import { createContext } from 'react';
import todoReducer from './reducers/todoReducer';
import routeReducer from './reducers/routeReducer';
import { ITodos } from './types';

// interface TodoState {
//   todosData: {
//     todosAll: ITodos[];
//     isConfirmedAll: boolean;
//   };
//   routeData: {
//     location: string;
//   };
// }

class Store {
  // _state: TodoState;
  constructor(reducers) {
    this._state = {};
    this.reducers = reducers;
    // this._state = {
    //     todosData: {
    //       todosAll: [],
    //       isConfirmedAll: false,
    //     },
    //     routeData: {
    //       location: '/todos',
    //     },
    //   };
  }

  getState() {
    return this._state;
  }

  rootReducer(action, state, reducersObj) {
    const stateToReturn = state;
    for (const key in reducersObj) {
      stateToReturn[reducersObj[key].name] = reducersObj[key](
        action,
        state[reducersObj[key].name],
      );
    }
    return state;
  }

  createRootReducer(action, reducersObj) {
    const state = {};
    for (const key in reducersObj) {
      state[reducersObj[key].name] = reducersObj[key](action);
    }
    return state;
  }

  firstDispatch(action) {
    this._state = this.createRootReducer(action, this.reducers);
  }

  dispatch(action) {
    this._state = this.rootReducer(action, this._state, this.reducers);
  }
}

const store = new Store({
  routeReducer,
  todoReducer,
});

const initialReducers = () => ({ type: 'INITIALISING__STATE' });

store.firstDispatch(initialReducers());

export const StoreContext = createContext(store);

export const StoreStatusContext = createContext({
  stateStatus: false,
  toggleStatus: () => {},
});

export default store;
