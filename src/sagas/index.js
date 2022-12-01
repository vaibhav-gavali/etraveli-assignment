import { all, fork } from 'redux-saga/effects';

import * as movieSagas from './movieSaga';

export default function* rootSaga() {
  yield all([...Object.values(movieSagas)].map(fork));
}
