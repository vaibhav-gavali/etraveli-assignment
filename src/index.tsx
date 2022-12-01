import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './sagas';
import rootReducer from './reducers';

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
});

saga.run(rootSaga);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
