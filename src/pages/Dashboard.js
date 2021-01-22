import React from 'react';

export const Dashboard = () => {
  return (
    <h1>Welcome to the Dashboard!!!</h1>
  );
};

// NEXT STEP:
// Create layout for the Dashboard:
// When the user comes in the dashboard, we can do a fetch GET to the profile endpoint
// retrieve baby details and use those to create the Baby Prfile Header section
// Create sidebar: with 3 different sections
// when each section is clicked on, they will render a new component which does the
// according fetch to the backend
