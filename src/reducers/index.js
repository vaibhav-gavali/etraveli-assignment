import headerReducer from './headerReducer';
import { combineReducers } from 'redux';

const combinedReducer = combineReducers({
  headerStore: headerReducer,
  // ... all your app's reducers
});

const rootReducer = (state, action) => {
  // if (action.type === 'RESET') {
  //   state = undefined;
  // }
  return combinedReducer(state, action);
};

export default rootReducer;
