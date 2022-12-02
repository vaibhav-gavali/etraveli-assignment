import React from 'react';
import { cleanup, screen, fireEvent } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from '../utils/test-util';
import MovieComponent from './MovieComponent';
import { initialState as movieInitialState } from '../reducers/movieReducer';
import { initialState as headerInitialState } from '../reducers/headerReducer';
import { getMoviesList } from '../utils/test-resource.rsc';

afterEach(() => cleanup());

describe('MovieComponent Unit Tests', () => {
  test('loading component present in case of API call', () => {
    const initialMovieState = { ...movieInitialState, isLoading: true };
    renderWithProviders(<MovieComponent />, {
      preloadedState: {
        movieStore: initialMovieState,
      },
    });

    expect(screen.getByTestId('movie-loading')).toBeInTheDocument();
  });

  test('loading component not present in case of API call is completed', () => {
    const initialMovieState = { ...movieInitialState };
    renderWithProviders(<MovieComponent />, {
      preloadedState: {
        movieStore: initialMovieState,
      },
    });

    expect(screen.getByTestId('movie-loaded')).toBeInTheDocument();
  });

  test('Movie details UI displayed if movie is selectect from list', () => {
    const initialMovieState = {
      ...movieInitialState,
      list: getMoviesList(),
    };
    const initialHeaderState = {
      ...headerInitialState,
    };

    renderWithProviders(<MovieComponent />, {
      preloadedState: {
        movieStore: initialMovieState,
        headerStore: initialHeaderState,
      },
    });

    const elements = screen.getAllByTestId('movie-item');
    fireEvent.click(elements[0]);

    expect(screen.getByTestId('movie-details')).toBeInTheDocument();
  });
});
