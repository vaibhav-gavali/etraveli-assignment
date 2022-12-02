import { cleanup, screen, fireEvent, within } from '@testing-library/react';
import { initialState as movieInitialState } from '../../reducers/movieReducer';
import { getMoviesList } from '../../utils/test-resource.rsc';
import { renderWithProviders } from '../../utils/test-util';
import MovieDetailsComponent from './MovieDetailsComponent';

afterEach(() => cleanup());

describe('MovieDetailsComponent Unit Tests', () => {
  test('Fallback message displayed when no movie is selected for details', () => {
    const initialMovieState = { ...movieInitialState };
    renderWithProviders(<MovieDetailsComponent />, {
      preloadedState: {
        movieStore: initialMovieState,
      },
    });
    expect(screen.getByText('No Movie Selected')).toBeInTheDocument();
    expect(screen.queryByTestId('movie-details')).not.toBeInTheDocument();
  });

  test('Proper UI displayed when movie is selected for details', () => {
    const initialMovieState = {
      ...movieInitialState,
      currentMovieIndex: 1,
      list: getMoviesList(),
    };
    renderWithProviders(<MovieDetailsComponent />, {
      preloadedState: {
        movieStore: initialMovieState,
      },
    });

    expect(screen.getByTestId('movie-details')).toBeInTheDocument();
    expect(screen.queryByText('No Movie Selected')).not.toBeInTheDocument();
  });
});
