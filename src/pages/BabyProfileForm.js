import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { user } from '../reducer/user';

export const BabyProfileForm = () => {
  const [testValue, setTestValue] = useState('');
  const username = useSelector((store) => store.user.username);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(user.actions.setPage({ page: 'dashboard' }));
  };

  // When we implement the Baby Profile form properly, fix this connection to the Dashboard
  // At this point the accessToken is already saved in the store, so we should have
  // access to restricted endpoints
  // So it could be that on this page, when the user clicks on CONTINUE button, we redirect to
  // Dasboard and in the Dasboard component we do the fetch to the restricted GET Baby Profile
  // endpoint, so we can show the baby details in the Header section of the Dashboard

  return (
    <>
      <h1>Baby Profile Form</h1>
      <h2>{`Welcome, ${username}. Start by filling up these details:`}</h2>
      <h3>INSERT PROPER FORM HERE WHEN READY</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="testInput">
          <p>Username:</p>
          <input
            id="testInput"
            type="text"
            value={testValue}
            onChange={(event) => setTestValue(event.target.value)}
            required />
        </label>
        <button type="submit">CONTINUE</button>
      </form>
    </>
  );
};
