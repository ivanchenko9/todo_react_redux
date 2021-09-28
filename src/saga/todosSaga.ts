import { put, takeEvery } from 'redux-saga/effects';
import { TodoActionTypes, setTodosAll } from '../redux/reducers/todoReducer';
import todosAPI from '../api/api';

function* fetchTodosWorker() {
  try {
    const todosArrRaw = yield todosAPI.fetchTodos();
    console.log('Todos fetched in Saga: ', todosArrRaw);
    yield put(setTodosAll(todosArrRaw));
  } catch (error) {
    console.error(error);
  }
}

export default function* fetchTodosWatcher() {
  yield takeEvery(TodoActionTypes.ASYNC_GET_TODOS, fetchTodosWorker);
}
