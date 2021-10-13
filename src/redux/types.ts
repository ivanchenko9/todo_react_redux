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

export interface UpdateInfo {
  id: number;
  isCompleted: boolean;
}

export interface TodoState {
  todosAll: ITodos[];
  isConfirmedAll: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: any;
}

export interface SnakBarState {
  isSuccesfull: boolean;
  messegaStatus: string;
}

export interface completeAllObj {
  isCompletedAll: boolean;
  todosIdToUpdate: number[];
}

interface GetTodosSuccessAction {
  type: getTodos.SUCCESS;
  payload: ITodos[];
  message: string;
}
interface GetTodosFailedAction {
  type: getTodos.FAILED;
  message: string;
}

interface CreateTaskSuccessAction {
  type: createTask.SUCCESS;
  payload: string;
  message: string;
}
interface CreateTaskFailedAction {
  type: createTask.FAILED;
  message: string;
}

interface UpdateTaskSuccessAction {
  type: updateTask.SUCCESS;
  payload: ITodos[];
  message: string;
}
interface UpdateTaskFailedAction {
  type: updateTask.FAILED;
  message: string;
}

interface DeleteTaskSuccessAction {
  type: deleteTask.SUCCESS;
  payload: ITodos[];
  message: string;
}
interface DeleteTaskFailedAction {
  type: deleteTask.FAILED;
  message: string;
}

interface SetTodosSuccessAction {
  type: setTodos.SUCCESS;
  payload: ITodos[];
  message: string;
}
interface SetTodosFailedAction {
  type: setTodos.FAILED;
  message: string;
}

interface ChangeIsConfirmedAllStatusSuccessAction {
  type: changeIsConfirmedAllStatus.SUCCESS;
  payload: completeAllObj;
  message: string;
}
interface ChangeIsConfirmedAllStatusFailedAction {
  type: changeIsConfirmedAllStatus.FAILED;
  message: string;
}

interface SetCurrnetUserSuccessAction {
  type: setCurrentUser.SUCCESS;
  payload: any;
  message: string;
}

interface SetCurrnetUserFailedAction {
  type: setCurrentUser.FAILED;
  message: string;
}

interface setCurrentUserFromLSSuccessAction {
  type: setCurrentUserFromLS.SUCCESS;
  payload: any;
  message: string;
}

interface setCurrentUserFromLSFailedAction {
  type: setCurrentUserFromLS.FAILED;
  message: string;
}

interface registrationSuccessAction {
  type: registration.SUCCESS;
  message: string;
}

interface registrationFailedAction {
  type: registration.FAILED;
  message: string;
}

interface logoutSuccessAction {
  type: logout.SUCCESS;
  payload: any;
  message: string;
}

interface logoutFailedAction {
  type: logout.FAILED;
  message: string;
}

export type TodoAction =
  | GetTodosSuccessAction
  | GetTodosFailedAction
  | CreateTaskSuccessAction
  | CreateTaskFailedAction
  | UpdateTaskSuccessAction
  | UpdateTaskFailedAction
  | DeleteTaskSuccessAction
  | DeleteTaskFailedAction
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

export type SnakBarAction = TodoAction | AuthAction;
