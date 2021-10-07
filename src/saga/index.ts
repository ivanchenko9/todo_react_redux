import { all } from 'redux-saga/effects';
// import {
//   getTodosWatcher,
//   createTaskWatcher,
//   setTodosWatcher,
//   updateTaskWatcher,
//   deleteTaskWatcher,
//   changeIsConfirmedAllStatusWatcher,
// } from './todosSaga';
// import {
//   setCurrentUserWatcher,
//   setCurrentUserFromLSWatcher,
//   registrationWatcher,
//   logoutWatcher,
// } from './authSaga';

import {
  getTodosWatcher,
  createTaskWatcher,
  setTodosWatcher,
  updateTaskWatcher,
  deleteTaskWatcher,
  changeIsConfirmedAllStatusWatcher,
} from './todosSagaNew';
import {
  setCurrentUserWatcher,
  registrationWatcher,
  setCurrentUserFromLSWatcher,
  logoutWatcher,
} from './authSagaNew';

export default function* rootWatcher() {
  yield all([
    getTodosWatcher(),
    createTaskWatcher(),
    setTodosWatcher(),
    changeIsConfirmedAllStatusWatcher(),
    updateTaskWatcher(),
    deleteTaskWatcher(),
    setCurrentUserWatcher(),
    setCurrentUserFromLSWatcher(),
    registrationWatcher(),
    logoutWatcher(),
  ]);
}
