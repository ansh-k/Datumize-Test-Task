import { put, fork, take } from 'redux-saga/effects';
import { REQUEST_DATA, SET_PROJECTS } from '../actions';

function* watchRequestProjects () {
  while (1) {
    const { item } = yield take(REQUEST_DATA);
    if (item === 'projects') {
      const response = yield fetch('http://localhost:3000/projects');
      if (response.status === 200) {
        const projects = yield response.json();
        yield put({ type: SET_PROJECTS, item: projects });
      }
    }
  }
}

export default [
  fork(watchRequestProjects),
];
