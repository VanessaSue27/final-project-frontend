import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: localStorage.username || null,
  accessToken: localStorage.accessToken || null,
  errorMessage: null
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      const { username } = action.payload;
      localStorage.setItem('username', username);
      state.username = username;
    },
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload;
      localStorage.setItem('accessToken', accessToken);
      state.accessToken = accessToken;
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload;
      state.errorMessage = errorMessage;
    },
    logout: (state, action) => {
      state.username = null;
      state.accessToken = null;
      state.errorMessage = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('username');
    }
  }
});
