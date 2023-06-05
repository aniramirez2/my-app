import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slicers/slicer';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;