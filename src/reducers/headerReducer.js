import { createSlice } from '@reduxjs/toolkit';

const HEADER_STATE = 'header';

export const initialState = {
  sortBy: 'episode_id',
  searchBy: '',
  filterBy: 'title',
};

export const headerSlice = createSlice({
  name: [HEADER_STATE],
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSearchBy: (state, action) => {
      state.searchBy = action.payload;
    },
    setFilterBy: (state, action) => {
      state.filterBy = action.payload;
    },
  },
});

export const actions = {
  ...headerSlice.actions,
};

export const types = {};

export default headerSlice.reducer;
