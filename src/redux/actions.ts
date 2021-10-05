const GET_TODOS = 'GET_TODOS';
const CREATE_TASK = 'CREATE_TASK';
const SET_TODOS = 'SET_TODOS';
const CHANGE_IS_CONFIRMED_ALL_STATUS = 'CHANGE_IS_CONFIRMED_ALL_STATUS';

const SET_CURRENT_USER = 'SET_CURRENT_USER';
const SET_CURRENT_USER_FROM_LC = 'SET_CURRENT_USER_FROM_LC';
const REGISTRATION = 'REGISTRATION';
const LOGOUT = 'LOGOUT';

const createAction = (actionName: string) => ({
  REQUEST: `${actionName}_REQUEST`,
  SUCCESS: `${actionName}_SUCCESS`,
  FAILED: `${actionName}_FAILED`,
});

export const getTodos = createAction(GET_TODOS);
export const createTask = createAction(CREATE_TASK);
export const setTodos = createAction(SET_TODOS);
export const changeIsConfirmedAllStatus = createAction(
  CHANGE_IS_CONFIRMED_ALL_STATUS,
);
export const setCurrentUser = createAction(SET_CURRENT_USER);
export const setCurrentUserFromLS = createAction(SET_CURRENT_USER_FROM_LC);
export const registration = createAction(REGISTRATION);
export const logout = createAction(LOGOUT);
