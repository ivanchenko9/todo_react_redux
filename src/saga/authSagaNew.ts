import { call, put, takeEvery } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';
import fetchToAPI from '../api/fetchToAPI';
import {
  setCurrentUser,
  setCurrentUserFromLS,
  registration,
  logout,
} from '../redux/actions';

function* setCurrentUserWorker(action) {
  try {
    const response = yield call(fetchToAPI.login, action.payload);
    const decoded = jwtDecode(response.token);
    console.log('decoded: ', decoded);
    yield put({
      type: setCurrentUser.SUCCESS,
      payload: decoded,
      message: 'Login succesfully!',
    });
  } catch (error) {
    yield put({
      type: setCurrentUser.FAILED,
      message:
        'Failed to login! Please check for correctness login and password!',
    });
    console.error(error);
  }
}

function* registrationWorker(action) {
  let response;
  try {
    response = yield call(fetchToAPI.registration, action.payload);
    yield put({
      type: registration.SUCCESS,
      message: 'Registrated succesful!',
    });
  } catch (error) {
    yield put({
      type: registration.FAILED,
      message: 'User with such login is already exist!',
    });
    console.error(error);
  }
}

function* setCurrentUserFromLSWorker(action) {
  try {
    const decoded = jwtDecode(action.payload);
    yield put({
      type: setCurrentUserFromLS.SUCCESS,
      payload: decoded,
      message: 'Succesfully authorized!',
    });
  } catch (error) {
    yield put({
      type: setCurrentUserFromLS.FAILED,
      message: 'Please, authorize youself!',
    });
    console.error(error);
  }
}

function* logoutWorker(action) {
  try {
    const response = yield call(fetchToAPI.logout, action.payload);
    yield put({
      type: logout.SUCCESS,
      payload: {},
      message: 'Logout succesfully!',
    });
  } catch (error) {
    yield put({
      type: logout.FAILED,
      message: 'Please, authorize youself!',
    });
    console.error(error);
  }
}

export function* setCurrentUserWatcher() {
  yield takeEvery(setCurrentUser.REQUEST, setCurrentUserWorker);
}

export function* registrationWatcher() {
  yield takeEvery(registration.REQUEST, registrationWorker);
}

export function* setCurrentUserFromLSWatcher() {
  yield takeEvery(setCurrentUserFromLS.REQUEST, setCurrentUserFromLSWorker);
}

export function* logoutWatcher() {
  yield takeEvery(logout.REQUEST, logoutWorker);
}
