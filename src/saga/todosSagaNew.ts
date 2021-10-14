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
    let newArr = yield fetchToAPI.getTodos();
    if (newArr === undefined) {
      newArr = [];
    }
    yield put({
      type: getTodos.SUCCESS,
      payload: newArr,
      message: 'Todos succesfully loaded!',
    });
  } catch (error) {
    yield put({ type: getTodos.FAILED, message: 'Failed to load todos!' });
    console.error(error);
  }
}

function* createTaskWorker(action) {
  try {
    let newArr = yield call(fetchToAPI.addTodo, action.payload);
    if (newArr === undefined) {
      newArr = [];
    }
    yield put({
      type: createTask.SUCCESS,
      payload: newArr,
      message: 'Todo added succesfully!',
    });
  } catch (error) {
    yield put({ type: createTask.FAILED, message: 'Failed to add todo!' });
    console.error(error);
  }
}

function* setTodosWorker(action) {
  try {
    yield put({
      type: setTodos.SUCCESS,
      payload: action.payload,
      message: 'Setted new todos!',
    });
  } catch (error) {
    yield put({ type: setTodos.FAILED, message: 'Failed to update todos!' });
    console.error(error);
  }
}

function* changeIsConfirmedAllStatusWorker(action) {
  try {
    let newArr = yield call(fetchToAPI.completeAll, action.payload);
    if (newArr === undefined) {
      newArr = [];
    }
    yield put({
      type: changeIsConfirmedAllStatus.SUCCESS,
      payload: newArr,
      message: 'Todos updated!',
    });
  } catch (error) {
    yield put({
      type: changeIsConfirmedAllStatus.FAILED,
      message: 'Failed to update todos!',
    });
    console.error(error);
  }
}

function* updateTaskWorker(action) {
  try {
    let newArr = yield call(fetchToAPI.updateTodo, action.payload);
    if (newArr === undefined) {
      newArr = [];
    }
    yield put({
      type: updateTask.SUCCESS,
      payload: newArr,
      message: 'Todo updated!',
    });
  } catch (error) {
    yield put({
      type: updateTask.FAILED,
      message: 'Failed to update todo!',
    });
    console.error(error);
  }
}

function* deleteTaskWorker(action) {
  try {
    let newArr = yield call(fetchToAPI.deleteTodo, action.payload);
    if (newArr === undefined) {
      newArr = [];
    }
    yield put({
      type: deleteTask.SUCCESS,
      payload: newArr,
      message: 'Todo deleted succesfully!',
    });
  } catch (error) {
    yield put({
      type: deleteTask.FAILED,
      payload: 'Failed to delete todo!',
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
