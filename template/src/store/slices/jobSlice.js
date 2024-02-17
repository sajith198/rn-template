import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchJobs} from '../../utils/api';

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

export const fetchJobsAsync = createAsyncThunk('jobs/fetchJobs', async () => {
  const response = await fetchJobs();
  return response;
});

export const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    // Add other reducers here if needed...
  },
  extraReducers: builder => {
    builder
      .addCase(fetchJobsAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export other actions and selectors as needed...

export default jobSlice.reducer;
