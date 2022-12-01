import { createSelector } from 'reselect';

export const headerStateSelector = (state) => state.headerStore;

export const getSearchValueSelector = createSelector(
  headerStateSelector,
  (headerState) => headerState.searchBy || ''
);

export const getSortValueSelector = createSelector(
  headerStateSelector,
  (headerState) => headerState.sortBy || ''
);
