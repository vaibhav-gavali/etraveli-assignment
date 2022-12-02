import { createSlice } from '@reduxjs/toolkit';

const MOVIE_STATE = 'movie';

export const initialState = {
  list: [],
  isLoading: false,
  currentMovieIndex: null,
};

//Create this to use in Sagas
const GET_MOVIE_LIST = `${MOVIE_STATE}/getMovieList`;
const GET_MOVIE_LIST_SUCCESS = `${MOVIE_STATE}/setMovieListSuccess`;
const GET_MOVIE_LIST_FAILURE = `${MOVIE_STATE}/setMovieListFailure`;

export const movieSlice = createSlice({
  name: [MOVIE_STATE],
  initialState,
  reducers: {
    getMovieList: (state) => {
      state.isLoading = true;
    },
    setMovieListSuccess: (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    },
    setMovieListFailure: (state) => {
      state.list = [];
      state.isLoading = false;
    },
    selectSingleMovie: (state, action) => {
      state.currentMovieIndex = action.payload;
    },
  },
});

export const actions = {
  ...movieSlice.actions,
};

export const types = {
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_FAILURE,
};

export default movieSlice.reducer;
