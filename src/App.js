import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { user } from './reducer/user';

import { SignUpPage } from './pages/SignUpPage';
import { LogInPage } from './pages/LogInPage';
import { AboutPage } from './pages/AboutPage';
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
            <LogInPage />
          </Route>

          <Route path="/signup">
            <SignUpPage />
          </Route>

          <Route path="/about">
            <AboutPage />
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
