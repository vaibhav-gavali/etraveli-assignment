import React from 'react';
import { cleanup, screen } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from '../utils/test-util';
import MovieComponent from './MovieComponent';
import { initialState as movieInitialState } from '../reducers/movieReducer';

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
});
