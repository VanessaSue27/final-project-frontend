import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { user } from '../reducer/user';
import rocket from '../assets/rocket.jpg'
import { InputSection, Form, Button, LandingImage, UserInput, InputLabel, Title, SubTitle } from '../styled-components/SignUpAndLoginStyles'

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
      // eslint-disable-next-line no-shadow
      .catch((error) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: error.toString() }));
      });
  };

  return (
    <InputSection>
      <Form onSubmit={handleSignUp}>
        <Title>Time Capsule</Title>
        <InputLabel>
            Username
        </InputLabel>
        <UserInput
          id="usernameInput"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          minLength="3"
          maxLength="20"
          required />
        <InputLabel>
            Password
        </InputLabel>
        <UserInput
          id="passwordInput"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          minLength="5"
          maxLength="50"
          required />
        <Button type="submit">SIGN UP</Button>
        {error && <div>{`${error}`}</div>}
        <SubTitle>Already a user?</SubTitle>
        <Link to="/login">Log in here</Link>
      </Form>
      <LandingImage src={rocket} alt="rocket" />
    </InputSection>
  );
};
