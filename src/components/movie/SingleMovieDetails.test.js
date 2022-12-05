import { screen, act } from '@testing-library/react';
import { initialState as movieInitialState } from '../../reducers/movieReducer';
import { renderWithProviders } from '../../utils/test-util';
import { getCharactersList } from '../../utils/test-resource.rsc';
import SingleMovieDetails from './SingleMovieDetails';
import { actions } from '../../reducers/movieReducer';

describe('MovieComponent Unit Tests', () => {
  test('loading component present in case of get characters API call', () => {
    const initialMovieState = { ...movieInitialState, currentMovieIndex: 4 };
    renderWithProviders(<SingleMovieDetails />, {
      preloadedState: {
        movieStore: initialMovieState,
      },
    });

    const todoItem = screen.getByTestId('characters-loading');
    expect(todoItem).toBeInTheDocument();
  });

  test('empty component present in case of get characters API call', () => {
    const initialMovieState = { ...movieInitialState, currentMovieIndex: 4 };
    const { store } = renderWithProviders(<SingleMovieDetails />, {
      preloadedState: {
        movieStore: initialMovieState,
      },
    });

    // try to mock useEffect api calls
    act(() => {
      store.dispatch(actions.setMovieCharactersSuccess([]));
    });

    const todoItem = screen.getByTestId('characters-loaded-empty');
    expect(todoItem).toBeInTheDocument();
  });

  test('proper component present in case of get characters API call', () => {
    const initialMovieState = { ...movieInitialState, currentMovieIndex: 4 };
    const { store } = renderWithProviders(<SingleMovieDetails />, {
      preloadedState: {
        movieStore: initialMovieState,
      },
    });

    // try to mock useEffect api calls
    act(() => {
      store.dispatch(actions.setMovieCharactersSuccess(getCharactersList()));
    });

    const todoItem = screen.getByTestId('characters-loaded');
    expect(todoItem).toBeInTheDocument();
  });
});
