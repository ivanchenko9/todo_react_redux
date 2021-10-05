import {
  getTodos,
  createTask,
  setTodos,
  changeIsConfirmedAllStatus,
  setCurrentUser,
  setCurrentUserFromLS,
  registration,
  logout,
} from './actions';

export interface ITodos {
  id: number;
  isCompleted: boolean;
  title: string;
}

export interface IUser {
  login: string;
  password: string;
}

export interface TodoState {
  todosAll: ITodos[];
  isConfirmedAll: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: any;
}

interface GetTodosSuccessAction {
  type: getTodos.SUCCESS;
  payload: ITodos[];
}
interface GetTodosFailedAction {
  type: getTodos.FAILED;
  payload: string;
}

interface CreateTaskSuccessAction {
  type: createTask.SUCCESS;
  payload: string;
}
interface CreateTaskFailedAction {
  type: createTask.FAILED;
  payload: string;
}

interface SetTodosSuccessAction {
  type: setTodos.SUCCESS;
  payload: ITodos[];
}
interface SetTodosFailedAction {
  type: setTodos.FAILED;
  payload: string;
}

interface ChangeIsConfirmedAllStatusSuccessAction {
  type: changeIsConfirmedAllStatus.SUCCESS;
  payload: boolean;
}
interface ChangeIsConfirmedAllStatusFailedAction {
  type: changeIsConfirmedAllStatus.FAILED;
  payload: string;
}

interface SetCurrnetUserSuccessAction {
  type: setCurrentUser.SUCCESS;
  payload: any;
}

interface SetCurrnetUserFailedAction {
  type: setCurrentUser.FAILED;
  payload: string;
}

interface setCurrentUserFromLSSuccessAction {
  type: setCurrentUserFromLS.SUCCESS;
  payload: any;
}

interface setCurrentUserFromLSFailedAction {
  type: setCurrentUserFromLS.FAILED;
  payload: string;
}

interface registrationSuccessAction {
  type: registration.SUCCESS;
  payload: any;
}

interface registrationFailedAction {
  type: registration.FAILED;
  payload: string;
}

interface logoutSuccessAction {
  type: logout.SUCCESS;
  payload: any;
}

interface logoutFailedAction {
  type: logout.FAILED;
  payload: string;
}

export type TodoAction =
  | GetTodosSuccessAction
  | GetTodosFailedAction
  | CreateTaskSuccessAction
  | CreateTaskFailedAction
  | SetTodosSuccessAction
  | SetTodosFailedAction
  | ChangeIsConfirmedAllStatusSuccessAction
  | ChangeIsConfirmedAllStatusFailedAction
  | logoutSuccessAction
  | logoutFailedAction;

export type AuthAction =
  | SetCurrnetUserSuccessAction
  | SetCurrnetUserFailedAction
  | setCurrentUserFromLSSuccessAction
  | setCurrentUserFromLSFailedAction
  | registrationSuccessAction
  | registrationFailedAction
  | logoutSuccessAction
  | logoutFailedAction;
