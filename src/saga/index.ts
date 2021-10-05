import { all } from 'redux-saga/effects';
import {
  getTodosWatcher,
  createTaskWatcher,
  setTodosWatcher,
  changeIsConfirmedAllStatusWatcher,
} from './todosSaga';
import {
  setCurrentUserWatcher,
  setCurrentUserFromLSWatcher,
  registrationWatcher,
  logoutWatcher,
} from './authSaga';

export default function* rootWatcher() {
  yield all([
    getTodosWatcher(),
    createTaskWatcher(),
    setTodosWatcher(),
    changeIsConfirmedAllStatusWatcher(),
    setCurrentUserWatcher(),
    setCurrentUserFromLSWatcher(),
    registrationWatcher(),
    logoutWatcher(),
  ]);
}
