import { call, put, takeEvery } from 'redux-saga/effects';
import fetchToAPI from '../api/fetchToAPI';
import {
  getTodos,
  createTask,
  setTodos,
  changeIsConfirmedAllStatus,
  updateTask,
  deleteTask,
} from '../redux/actions';

function* getTodosWorker() {
  try {
    const newArr = yield fetchToAPI.getTodos();
    yield put({ type: getTodos.SUCCESS, payload: newArr });
  } catch (error) {
    yield put({ type: getTodos.FAILED, payload: 'Failed to get todos!' });
    console.error(error);
  }
}

function* createTaskWorker(action) {
  try {
    const newArr = yield call(fetchToAPI.addTodo, action.payload);
    yield put({ type: createTask.SUCCESS, payload: newArr });
  } catch (error) {
    yield put({ type: createTask.FAILED, payload: 'Failed to add task!' });
    console.error(error);
  }
}

function* setTodosWorker(action) {
  try {
    yield put({ type: setTodos.SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: setTodos.FAILED, payload: 'Failed to set todos!' });
    console.error(error);
  }
}

function* changeIsConfirmedAllStatusWorker(action) {
  try {
    const newArr = yield call(fetchToAPI.completeAll, action.payload);
    yield put({ type: changeIsConfirmedAllStatus.SUCCESS, payload: newArr });
  } catch (error) {
    yield put({
      type: changeIsConfirmedAllStatus.FAILED,
      payload: 'Failed to complete all tasks!',
    });
    console.error(error);
  }
}

function* updateTaskWorker(action) {
  try {
    const newArr = yield call(fetchToAPI.updateTodo, action.payload);
    yield put({ type: updateTask.SUCCESS, payload: newArr });
  } catch (error) {
    yield put({
      type: updateTask.FAILED,
      payload: 'Failed to complete all tasks!',
    });
    console.error(error);
  }
}

function* deleteTaskWorker(action) {
  try {
    const newArr = yield call(fetchToAPI.deleteTodo, action.payload);
    yield put({ type: deleteTask.SUCCESS, payload: newArr });
  } catch (error) {
    yield put({
      type: deleteTask.FAILED,
      payload: 'Failed to complete all tasks!',
    });
    console.error(error);
  }
}

export function* getTodosWatcher() {
  yield takeEvery(getTodos.REQUEST, getTodosWorker);
}

export function* createTaskWatcher() {
  yield takeEvery(createTask.REQUEST, createTaskWorker);
}

export function* setTodosWatcher() {
  yield takeEvery(setTodos.REQUEST, setTodosWorker);
}

export function* changeIsConfirmedAllStatusWatcher() {
  yield takeEvery(
    changeIsConfirmedAllStatus.REQUEST,
    changeIsConfirmedAllStatusWorker,
  );
}

export function* updateTaskWatcher() {
  yield takeEvery(updateTask.REQUEST, updateTaskWorker);
}

export function* deleteTaskWatcher() {
  yield takeEvery(deleteTask.REQUEST, deleteTaskWorker);
}
