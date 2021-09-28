import { all } from 'redux-saga/effects';
import fetchTodosWatcher from './todosSaga';

export default function* rootWatcher() {
  yield all([fetchTodosWatcher()]);
}
