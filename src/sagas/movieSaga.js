import { call, put, takeEvery } from 'redux-saga/effects';
import { actions, types } from '../reducers/movieReducer';
import axios from 'axios';

const { setMovieListSuccess, setMovieListFailure } = actions;
const { GET_MOVIE_LIST } = types;

function* getMoviesSaga() {
  try {
    const movies = yield call(
      axios.get,
      `https://swapi.dev/api/films/?format=json`
    );
    console.log(movies);
    yield put(setMovieListSuccess(movies.data.results));
  } catch (e) {
    yield put(setMovieListFailure());
  }
}

function* watchGetMovies() {
  yield takeEvery(GET_MOVIE_LIST, getMoviesSaga);
}

export { watchGetMovies };
