import { put, fork, take } from 'redux-saga/effects';
import { REQUEST_DATA, SET_USERS } from '../actions';

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

export default [
  fork(watchRequestUsers),
];
