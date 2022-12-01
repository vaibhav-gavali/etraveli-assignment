import { createSelector } from 'reselect';

export const headerStateSelector = (state) => state.headerStore;
export const movieStateSelector = (state) => state.movieStore;

export const getSearchValueSelector = createSelector(
  headerStateSelector,
  (headerState) => headerState.searchBy || ''
);

export const getSortValueSelector = createSelector(
  headerStateSelector,
  (headerState) => headerState.sortBy || ''
);

export const movieListSelector = createSelector(
  movieStateSelector,
  (movieState) => movieState.list || []
);
