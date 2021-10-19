import { all } from 'redux-saga/effects';

import {
  getTodosWatcher,
  createTaskWatcher,
  setTodosWatcher,
  updateTaskWatcher,
  deleteTaskWatcher,
  changeIsConfirmedAllStatusWatcher,
  socketUpdateWatcher,
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
    socketUpdateWatcher(),
    setCurrentUserWatcher(),
    setCurrentUserFromLSWatcher(),
    registrationWatcher(),
    logoutWatcher(),
  ]);
}
