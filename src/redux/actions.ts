const GET_TODOS = 'GET_TODOS';
const CREATE_TASK = 'CREATE_TASK';
const SET_TODOS = 'SET_TODOS';
const CHANGE_IS_CONFIRMED_ALL_STATUS = 'CHANGE_IS_CONFIRMED_ALL_STATUS';

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
