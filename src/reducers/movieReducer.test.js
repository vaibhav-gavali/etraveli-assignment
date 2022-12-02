import { getMoviesList } from '../utils/test-resource.rsc';
import movieReducer, { actions, initialState } from './movieReducer';

const { setMovieListSuccess, selectSingleMovie } = actions;

describe('movieReducer Unit Tests', () => {
  test('should return the initial state', () => {
    expect(movieReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  test('should update the movie store after adding movies', () => {
    const moviesList = getMoviesList();
    expect(movieReducer(initialState, setMovieListSuccess(moviesList))).toEqual(
      {
        ...initialState,
        list: moviesList,
      }
    );
  });

  test('should update the movie store after selecting a single movie', () => {
    const moviesList = getMoviesList();
    const updatedState = {
      ...initialState,
      list: moviesList,
    };

    const newState = movieReducer(updatedState, selectSingleMovie(2));

    expect(newState.currentMovieIndex).toBe(2);
  });
});
