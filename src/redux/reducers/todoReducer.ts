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

export const getTodosAC = (socket) => ({
  type: getTodos.REQUEST,
  socket,
});
export const createTaskAC = (newTask: ITodos, socket) => ({
  type: createTask.REQUEST,
  payload: newTask,
  socket,
});
export const changeIsConfirmedAllStatusAC = (
  isConfirmedAll: boolean,
  socket,
) => ({
  type: changeIsConfirmedAllStatus.REQUEST,
  payload: isConfirmedAll,
  socket,
});
export const updateTaskAC = (updateInfo: UpdateInfo, socket) => ({
  type: updateTask.REQUEST,
  payload: updateInfo,
  socket,
});
export const deleteTaskAC = (idToDelete: number, socket) => ({
  type: deleteTask.REQUEST,
  payload: idToDelete,
  socket,
});

export const setTodosAC = (newArray: ITodos[], socket) => ({
  type: setTodos.REQUEST,
  payload: newArray,
  socket,
});

export default todoReducer;
