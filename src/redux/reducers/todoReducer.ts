import { ITodos, TodoState, TodoAction, UpdateInfo } from '../types';
import {
  getTodos,
  createTask,
  setTodos,
  changeIsConfirmedAllStatus,
  updateTask,
  deleteTask,
  logout,
} from '../actions';

const initilState: TodoState = {
  todosAll: [],
  isConfirmedAll: false,
};

const todoReducer = (state = initilState, action: TodoAction): TodoState => {
  switch (action.type) {
    case getTodos.SUCCESS: {
      return {
        ...state,
        todosAll: action.payload,
      };
    }
    case createTask.SUCCESS: {
      return {
        ...state,
        todosAll: action.payload,
      };
    }
    case setTodos.SUCCESS: {
      return {
        ...state,
        todosAll: action.payload,
      };
    }
    case updateTask.SUCCESS: {
      return {
        ...state,
        todosAll: action.payload,
      };
    }
    case deleteTask.SUCCESS: {
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
export const createTaskAC = (newTask: ITodos) => ({
  type: createTask.REQUEST,
  payload: newTask,
});
export const changeIsConfirmedAllStatusAC = (isConfirmedAll: boolean) => ({
  type: changeIsConfirmedAllStatus.REQUEST,
  payload: isConfirmedAll,
});
export const updateTaskAC = (updateInfo: UpdateInfo) => ({
  type: updateTask.REQUEST,
  payload: updateInfo,
});
export const deleteTaskAC = (idToDelete: number) => ({
  type: deleteTask.REQUEST,
  payload: idToDelete,
});
export const setTodosAC = (newArray: ITodos[]) => ({
  type: setTodos.REQUEST,
  payload: newArray,
});

export default todoReducer;
