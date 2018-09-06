import { put, fork, take } from 'redux-saga/effects';
import { REQUEST_DATA, SET_ROLES } from '../actions';

function* watchRequestRoles () {
  while (1) {
    const { item } = yield take(REQUEST_DATA);
    if (item === 'roles') {
      const response = yield fetch('http://localhost:3000/roles');
      if (response.status === 200) {
        const roles = yield response.json();
        yield put({ type: SET_ROLES, item: roles });
      }
    }
  }
}

export default [
  fork(watchRequestRoles),
];
