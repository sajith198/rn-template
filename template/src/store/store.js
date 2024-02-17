// store.js
import {configureStore} from '@reduxjs/toolkit';
import jobReducer from './slices/jobSlice';

const store = configureStore({
  reducer: {
    jobs: jobReducer,
    // Add other reducers here if needed...
  },
});

export default store;
