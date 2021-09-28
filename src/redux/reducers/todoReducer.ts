import todosAPI from '../../api/api';
import { ITodos } from '../types';

export enum TodoActionTypes {
  SET_TODOS = 'SET_TODOS',
  CHANGE_IS_CONFIRMED_ALL_STATUS = 'CHANGE_IS_CONFIRMED_ALL_STATUS',
  CREATE_TASK = 'CREATE_TASK',
  ASYNC_GET_TODOS = ' ASYNC_GET_TODOS',
}

interface TodoState {
  todosAll: ITodos[];
  isConfirmedAll: boolean;
}

interface SetTodosAction {
  type: TodoActionTypes.SET_TODOS;
  payload: ITodos[];
}

interface ChangeIsConfirmedAllAction {
  type: TodoActionTypes.CHANGE_IS_CONFIRMED_ALL_STATUS;
  payload: boolean;
}

interface CreateTaskAction {
  type: TodoActionTypes.CREATE_TASK;
  payload: string;
}

interface AsyncGetTodosAction {
  type: TodoActionTypes.ASYNC_GET_TODOS;
}

type TodoAction =
  | SetTodosAction
  | ChangeIsConfirmedAllAction
  | CreateTaskAction
  | AsyncGetTodosAction;

const initilState: TodoState = {
  todosAll: [],
  isConfirmedAll: false,
};

const todoReducer = (state = initilState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.CHANGE_IS_CONFIRMED_ALL_STATUS: {
      return {
        ...state,
        isConfirmedAll: action.payload,
      };
    }
    case TodoActionTypes.SET_TODOS: {
      return {
        ...state,
        todosAll: action.payload,
      };
    }
    case TodoActionTypes.CREATE_TASK: {
      const newTask: ITodos = {
        id: Date.now(),
        isCompleted: false,
        title: action.payload,
      };
      todosAPI.addTodo(newTask);
      return {
        ...state,
        todosAll: [...state.todosAll, newTask],
      };
    }
    default:
      return state;
  }
};

export const createTaskAC = (taskText: string) => ({
  type: TodoActionTypes.CREATE_TASK,
  payload: taskText,
});
export const setIsConfirmedAll = (isConfirmedAll: boolean) => ({
  type: TodoActionTypes.CHANGE_IS_CONFIRMED_ALL_STATUS,
  payload: isConfirmedAll,
});
export const setTodosAll = (newArray: ITodos[]) => ({
  type: TodoActionTypes.SET_TODOS,
  payload: newArray,
});
export const AsyncGetTodos = () => ({
  type: TodoActionTypes.ASYNC_GET_TODOS,
});

export default todoReducer;
