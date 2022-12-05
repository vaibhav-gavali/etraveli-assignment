import { call, put, takeLatest, select } from 'redux-saga/effects';
import { actions, types } from '../reducers/movieReducer';
import axios from 'axios';
import { currentMovieDetailsSelector } from '../selectors';

const {
  setMovieListSuccess,
  setMovieListFailure,
  setMovieCharactersSuccess,
  setMovieCharactersFailure,
} = actions;

const { GET_MOVIE_LIST, GET_MOVIE_CHARACTERS } = types;

function* getMoviesSaga() {
  try {
    const movies = yield call(
      axios.get,
      `https://swapi.dev/api/films/?format=json`
    );
    yield put(setMovieListSuccess(movies.data.results));
  } catch (e) {
    yield put(setMovieListFailure());
  }
}

const getAllCharactersUrl = (characters = []) => {
  return characters.map((characterURL) => axios.get(characterURL));
};

function* getMovieSpecificCharactersSaga() {
  const currentMovie = yield select(currentMovieDetailsSelector);

  if (currentMovie?.characters.length > 0) {
    const getAllUrls = yield getAllCharactersUrl(currentMovie?.characters);
    try {
      const characters = yield call(axios.all, getAllUrls);
      const filteredData = characters.map((obj) => {
        return {
          ...obj.data,
        };
      });

      yield put(setMovieCharactersSuccess(filteredData));
    } catch (e) {
      yield put(setMovieCharactersFailure());
    }
  }
}

function* watchGetMovies() {
  yield takeLatest(GET_MOVIE_LIST, getMoviesSaga);
}

function* watchGetMovieCharacters() {
  yield takeLatest(GET_MOVIE_CHARACTERS, getMovieSpecificCharactersSaga);
}

export { watchGetMovies, watchGetMovieCharacters };
