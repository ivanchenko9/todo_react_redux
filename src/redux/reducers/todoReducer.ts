import { ITodos, TodoState, TodoAction } from '../types';
import {
  getTodos,
  createTask,
  setTodos,
  changeIsConfirmedAllStatus,
  logout,
} from '../actions';

const initilState: TodoState = {
  todosAll: [],
  isConfirmedAll: false,
};

const todoReducer = (state = initilState, action: TodoAction): TodoState => {
  switch (action.type) {
    case getTodos.SUCCESS || createTask.SUCCESS || setTodos.SUCCESS: {
      return {
        ...state,
        todosAll: action.payload,
      };
    }
    case changeIsConfirmedAllStatus.SUCCESS: {
      return {
        ...state,
        isConfirmedAll: !state.isConfirmedAll,
        todosAll: action.payload,
      };
    }
    case logout.SUCCESS: {
      return {
        ...state,
        todosAll: [],
      };
    }
    default:
      return state;
  }
};

export const getTodosAC = () => ({
  type: getTodos.REQUEST,
});
export const createTaskAC = (taskText: string) => ({
  type: createTask.REQUEST,
  payload: taskText,
});
export const changeIsConfirmedAllStatusAC = (isConfirmedAll: boolean) => ({
  type: changeIsConfirmedAllStatus.REQUEST,
  payload: isConfirmedAll,
});
export const setTodosAC = (newArray: ITodos[]) => ({
  type: setTodos.REQUEST,
  payload: newArray,
});

export default todoReducer;
