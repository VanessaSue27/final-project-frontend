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

  const babyFacts = [
    'Babies are born to Boogie! 🕺 Studies have shown that babies are born with innate sense of rhythm',
    'Newborns have natural aquatic instincts when in water 🏊‍♀️',
    'Babies are born with 300 bones 🦴',
    'Smiles are reserved for human babies only 👶',
    'Babies go through around 3360 nappies in the first year 👀',
    'Infants first recognise the colour Red 🔴! The last ones? Blue 🔵 and Purple 🟣',
    'Newborns are tear-free 💦, they only start producing tears at 3 weeks of age',
    'Babies grow at an insanely speedy rate 🚀. Treasure those memories! ♥️',
    'Babies will sleep, on average, 5400 hours in the first year 😴',
    'Babies tastebuds only recognise sweet and sour 🍬',
    'Babies deprive their parents of approximately 44 days of sleep, on average, in the first year 😬'
  ];

  const pickRandomFacts = () => {
    const randomIndex = Math.floor(Math.random() * babyFacts.length);
    return babyFacts[randomIndex];
  };

  if (accessToken) {
    return (
      <>
        <h1>{`Welcome, ${username} to the Dashboard!!!`}</h1>
        <h2>{pickRandomFacts()}</h2>
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