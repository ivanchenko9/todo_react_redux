import { call, put, takeEvery } from 'redux-saga/effects';
import callAPI from '../api/callAPI';
import {
  getTodos,
  createTask,
  setTodos,
  changeIsConfirmedAllStatus,
  updateTask,
  deleteTask,
} from '../redux/actions';

function* getTodosWorker() {
  let response;
  try {
    response = yield callAPI.getTodos();
    const newArr = response.data;
    yield put({ type: getTodos.SUCCESS, payload: newArr });
  } catch (error) {
    if (response.status === 401) {
      // should send req for refresh token and then call getTodosWorker again
      console.log('User is unauthorized');
    }
    yield put({ type: getTodos.FAILED, payload: 'Failed to get todos!' });
    console.error(error);
  }
}

function* createTaskWorker(action) {
  let response;
  try {
    response = yield call(callAPI.addTodo, action.payload);
    const newArr = response.data;
    yield put({ type: createTask.SUCCESS, payload: newArr });
  } catch (error) {
    if (response.status === 401) {
      // should send req for refresh token and then call getTodosWorker again
      console.log('User is unauthorized');
    }
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
  let response;
  try {
    response = yield call(callAPI.completeAll, action.payload);
    const newArr = response.data;
    yield put({ type: changeIsConfirmedAllStatus.SUCCESS, payload: newArr });
  } catch (error) {
    if (response.status === 401) {
      // should send req for refresh token and then call getTodosWorker again
      console.log('User is unauthorized');
    }
    yield put({
      type: changeIsConfirmedAllStatus.FAILED,
      payload: 'Failed to complete all tasks!',
    });
    console.error(error);
  }
}

function* updateTaskWorker(action) {
  let response;
  try {
    response = yield call(callAPI.updateTodo, action.payload);
    const newArr = response.data;
    yield put({ type: updateTask.SUCCESS, payload: newArr });
  } catch (error) {
    if (response.status === 401) {
      // should send req for refresh token and then call getTodosWorker again
      console.log('User is unauthorized');
    }
    yield put({
      type: updateTask.FAILED,
      payload: 'Failed to complete all tasks!',
    });
    console.error(error);
  }
}

function* deleteTaskWorker(action) {
  let response;
  try {
    response = yield call(callAPI.deleteTodo, action.payload);
    const newArr = response.data;
    yield put({ type: deleteTask.SUCCESS, payload: newArr });
  } catch (error) {
    if (response.status === 401) {
      // should send req for refresh token and then call getTodosWorker again
      console.log('User is unauthorized');
    }
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
