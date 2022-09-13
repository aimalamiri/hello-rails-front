/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getMessage = createAsyncThunk('message/getMessage', async () => axios
  .get('http://localhost:8080/message')
  .then((response) => {
    if (!response.statusText === 'OK') throw Error(response.statusText);
    return response.data;
  })
  .then((json) => json)
  .catch((error) => error));

const initialState = {
  loading: true,
  error: '',
  message: {},
};

const message = createSlice({
  name: 'message',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMessage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMessage.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    });
    builder.addCase(getMessage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export { getMessage };

export default message.reducer;
