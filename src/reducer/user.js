import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: localStorage.username || null,
  accessToken: localStorage.accessToken || null,
  errorMessage: null,
  dashboardContent: localStorage.dashboardContent || 'home',
  entry: localStorage.entry || null
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
    setDashboardContent: (state, action) => {
      const { dashboardContent } = action.payload;
      state.dashboardContent = dashboardContent;
      localStorage.setItem('dashboardContent', dashboardContent);
    },
    setEntry: (state, action) => {
      const { entry } = action.payload;
      state.entry = entry;
      localStorage.setItem('entry', entry);
    },
    logout: (state) => {
      state.username = null;
      state.accessToken = null;
      state.errorMessage = null;
      state.entry = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('username');
      localStorage.removeItem('dashboardContent');
      localStorage.removeItem('entry');
    }
  }
});
