import { combineReducers } from 'redux';
import headerReducer from './headerReducer';
import movieReducer from './movieReducer';

const combinedReducer = combineReducers({
  headerStore: headerReducer,
  movieStore: movieReducer,
  // ... all your app's reducers
});

const rootReducer = (state, action) => {
  // if (action.type === 'RESET') {
  //   state = undefined;
  // }
  return combinedReducer(state, action);
};

export default rootReducer;
