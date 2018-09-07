import { put, fork, take } from 'redux-saga/effects';
import {
  REQUEST_DATA,
  REQUEST_CURRENT_USER,
  SET_CURRENT_USER,
  SET_USERS,
} from '../actions';

function* watchRequestUsers () {
  while (1) {
    const { item } = yield take(REQUEST_DATA);
    if (item === 'users') {
      const response = yield fetch('http://localhost:3000/users');
      if (response.status === 200) {
        const users = yield response.json();
        yield put({ type: SET_USERS, item: users });
      }
    }
  }
}

function* watchRequestSingleUser () {
  while (1) {
    const { item } = yield take(REQUEST_CURRENT_USER);
    const response = yield fetch(`http://localhost:3000/users/${item}`);
    const user = yield response.json();
    yield put({ type: SET_CURRENT_USER, item: user });
  }
}

export default [
  fork(watchRequestUsers),
  fork(watchRequestSingleUser),
];
