import { all } from 'redux-saga/effects';
import userSagas from './user';
import roleSagas from './role';
import projectSagas from './project';

export default function* root () {
  yield all([
    ...projectSagas,
    ...roleSagas,
    ...userSagas,
  ]);
}