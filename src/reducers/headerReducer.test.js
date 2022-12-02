import headerReducer, { actions, initialState } from './headerReducer';

const { setSortBy, setSearchBy } = actions;

describe('headerReducer Unit Tests', () => {
  test('should return the initial state', () => {
    expect(headerReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  test('should update the header store after selecting sortBy', () => {
    expect(headerReducer(initialState, setSortBy('episode_id'))).toEqual({
      ...initialState,
      sortBy: 'episode_id',
    });
  });

  test('should update the header store after updating the search value', () => {
    expect(headerReducer(initialState, setSearchBy('arr'))).toEqual({
      ...initialState,
      searchBy: 'arr',
    });
  });
});
