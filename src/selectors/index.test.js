import { getMoviesList } from '../utils/test-resource.rsc';
import { currentMovieDetailsSelector, filteredMoviesSelector } from './';

describe('Selectors Unit Tests', () => {
  test('currentMovieDetailsSelector working correctly', () => {
    expect(currentMovieDetailsSelector.resultFunc(getMoviesList(), 1)).toEqual(
      getMoviesList().find((movie) => movie.episode_id === 1)
    );
  });

  test('filteredMoviesSelector working correctly', () => {
    const output1 = filteredMoviesSelector.resultFunc(getMoviesList(), '', '');
    const output2 = filteredMoviesSelector.resultFunc(
      getMoviesList(),
      'episode_id',
      ''
    );
    const output3 = filteredMoviesSelector.resultFunc(
      getMoviesList(),
      'episode_id',
      're'
    );

    expect(output1.length).toBe(6);
    expect(output2.length).toBe(6);
    expect(output3.length).toBe(3);
  });
});
