import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { user } from '../reducer/user';

const SIGNUP_URL = 'https://time-capsule-final.herokuapp.com/users';

export const SignUpPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((store) => store.user.errorMessage);
  const dispatch = useDispatch();

  // Added this function, so that if there are any persisted error messages
  // from login page, they will not show up here on load
  useEffect(() => {
    dispatch(user.actions.setErrorMessage({ errorMessage: null }));
  }, [dispatch]);

  const handleSignUp = (event) => {
    event.preventDefault();

    fetch(SIGNUP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password })
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not create account. Please try a different username - password.');
        }
        return res.json();
      })
      .then((json) => {
        dispatch(user.actions.setUsername({ username: name }));
        dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }));
        window.location.href = '/create-profile';
      })
      .catch((error) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: error.toString() }));
      });
  };

  return (
    <>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label htmlFor="usernameInput">
          <p>Username:</p>
          <input
            id="usernameInput"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            minLength="3"
            maxLength="20"
            required />
        </label>
        <label htmlFor="passwordInput">
          <p>Password:</p>
          <input
            id="passwordInput"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength="5"
            maxLength="50"
            required />
        </label>
        <button type="submit">SIGN UP</button>
      </form>
      {error && <div>{`${error}`}</div>}
      <p>Already a user?</p>
      <Link to="/login">
        <button type="button">Log in</button>
      </Link>
    </>
  );
};
