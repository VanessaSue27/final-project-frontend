import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 'signup',
  username: null,
  accessToken: null,
  errorMessage: null
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPage: (state, action) => {
      const { page } = action.payload;
      state.page = page;
    },
    setUsername: (state, action) => {
      const { username } = action.payload;
      state.username = username;
    },
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload;
      state.accessToken = accessToken;
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload;
      state.errorMessage = errorMessage;
    }
  }
});
