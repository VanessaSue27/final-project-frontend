import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { user } from './reducer/user';

import { SignUpPage } from './pages/SignUpPage';
import { LogInPage } from './pages/LogInPage';
import { BabyProfileForm } from './pages/BabyProfileForm';
import { Dashboard } from './pages/Dashboard';

const reducer = combineReducers({ user: user.reducer });
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <SignUpPage />
          </Route>

          <Route path="/login">
            <LogInPage />
          </Route>

          <Route path="/create-profile">
            <BabyProfileForm />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
