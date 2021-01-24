import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { user } from '../reducer/user';

import { SignUpPage } from './SignUpPage';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const username = useSelector((store) => store.user.username);
  const accessToken = useSelector((store) => store.user.accessToken);

  const handleClick = () => {
    dispatch(user.actions.logout());
    window.location.href = '/';
  };

  if (accessToken) {
    return (
      <>
        <h1>{`Welcome, ${username} to the Dashboard!!!`}</h1>
        <button type="button" onClick={handleClick}>LOGOUT</button>
      </>
    );
  } else {
    return (
      <SignUpPage />
    );
  }
};

// NEXT STEP:
// Create layout for the Dashboard:
// When the user comes in the dashboard, we can do a fetch GET to the profile endpoint
// retrieve baby details and use those to create the Baby Prfile Header section
// Create sidebar: with 3 different sections
// when each section is clicked on, they will render a new component which does the
// according fetch to the backend
