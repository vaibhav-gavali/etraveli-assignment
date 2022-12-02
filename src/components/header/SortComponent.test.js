import { cleanup, screen, fireEvent, within } from '@testing-library/react';
import { initialState as headerInitialState } from '../../reducers/headerReducer';
import SortComponent, { SORT_OPTIONS } from './SortComponent';
import { renderWithProviders } from '../../utils/test-util';

// Reset any runtime request handlers we may add during the tests.
afterEach(() => cleanup());

describe('SortComponent Unit Tests', () => {
  test('Sort options are showing correctly', () => {
    const initialMovieState = { ...headerInitialState };
    renderWithProviders(<SortComponent />, {
      preloadedState: {
        headerStore: initialMovieState,
      },
    });

    fireEvent.click(screen.getByTestId('drop-btn'));
    expect(screen.getByText('Episode')).toBeInTheDocument();
    expect(screen.getByText('Year')).toBeInTheDocument();
  });

  ['episode_id', 'release_date'].forEach((option) => {
    test(`Sort option is showing a checked icon if ${option} selected`, () => {
      const initialMovieState = { ...headerInitialState, sortBy: option };
      renderWithProviders(<SortComponent />, {
        preloadedState: {
          headerStore: initialMovieState,
        },
      });

      const label = SORT_OPTIONS.find((item) => item.value === option)?.label;

      fireEvent.click(screen.getByTestId('drop-btn'));
      const element = screen.getByText(label);
      expect(element).toBeInTheDocument();

      const checked = within(element).getAllByTestId('checked');
      expect(checked.length).toBe(1);
    });
  });
});
