import { createSlice } from '@reduxjs/toolkit';

const HEADER_STATE = 'header';

const initialState = {
  sortBy: '',
  searchBy: '',
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
  },
});

export const actions = {
  ...headerSlice.actions,
};

export const types = {};

export default headerSlice.reducer;
