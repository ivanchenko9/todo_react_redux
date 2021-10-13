import { IUser, SnakBarState, SnakBarAction } from '../types';
import {
  getTodos,
  createTask,
  setTodos,
  changeIsConfirmedAllStatus,
  updateTask,
  deleteTask,
  setCurrentUser,
  setCurrentUserFromLS,
  registration,
  logout,
} from '../actions';

const initilState: SnakBarState = {
  isSuccesfull: false,
  messegaStatus: '',
};

const snakbarReducer = (
  state = initilState,
  action: SnakBarAction,
): SnakBarState => {
  switch (action.type) {
    case getTodos.SUCCESS:
      return {
        ...state,
        isSuccesfull: true,
        messegaStatus: action.message,
      };
    case getTodos.FAILED:
      return {
        ...state,
        isSuccesfull: false,
        messegaStatus: action.message,
      };
    case createTask.SUCCESS:
      return {
        ...state,
        isSuccesfull: true,
        messegaStatus: action.message,
      };
    case createTask.FAILED:
      return {
        ...state,
        isSuccesfull: false,
        messegaStatus: action.message,
      };
    case setTodos.SUCCESS:
      return {
        ...state,
        isSuccesfull: true,
        messegaStatus: action.message,
      };
    case setTodos.FAILED:
      return {
        ...state,
        isSuccesfull: false,
        messegaStatus: action.message,
      };
    case changeIsConfirmedAllStatus.SUCCESS:
      return {
        ...state,
        isSuccesfull: true,
        messegaStatus: action.message,
      };
    case changeIsConfirmedAllStatus.FAILED:
      return {
        ...state,
        isSuccesfull: false,
        messegaStatus: action.message,
      };
    case updateTask.SUCCESS:
      return {
        ...state,
        isSuccesfull: true,
        messegaStatus: action.message,
      };
    case updateTask.FAILED:
      return {
        ...state,
        isSuccesfull: false,
        messegaStatus: action.message,
      };
    case deleteTask.SUCCESS:
      return {
        ...state,
        isSuccesfull: true,
        messegaStatus: action.message,
      };
    case deleteTask.FAILED:
      return {
        ...state,
        isSuccesfull: false,
        messegaStatus: action.message,
      };
    case setCurrentUser.SUCCESS:
      return {
        ...state,
        isSuccesfull: true,
        messegaStatus: action.message,
      };
    case setCurrentUser.FAILED:
      return {
        ...state,
        isSuccesfull: false,
        messegaStatus: action.message,
      };
    case setCurrentUserFromLS.SUCCESS:
      return {
        ...state,
        isSuccesfull: true,
        messegaStatus: action.message,
      };
    case setCurrentUserFromLS.FAILED:
      return {
        ...state,
        isSuccesfull: false,
        messegaStatus: action.message,
      };
    case registration.SUCCESS:
      return {
        ...state,
        isSuccesfull: true,
        messegaStatus: action.message,
      };
    case registration.FAILED:
      return {
        ...state,
        isSuccesfull: false,
        messegaStatus: action.message,
      };
    case logout.SUCCESS:
      return {
        ...state,
        isSuccesfull: true,
        messegaStatus: action.message,
      };
    case logout.FAILED:
      return {
        ...state,
        isSuccesfull: false,
        messegaStatus: action.message,
      };
    default:
      return state;
  }
};

export default snakbarReducer;
