import { createSelector } from 'reselect';

export const headerStateSelector = (state) => state.headerStore;

export const getSearchvalueSelector = createSelector(
  headerStateSelector,
  (headerState) => headerState.searchBy || ''
);

export const getSortvalueSelector = createSelector(
  headerStateSelector,
  (headerState) => headerState.sortBy || ''
);
