import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, InputLabel, InputSection, SubTitle, Title, UserInput, Button, LandingImage, ButtonLink } from 'styled-components/SignUpAndLoginStyles';

import { user } from '../reducer/user';
import rocket from '../assets/rocket.jpg'

const LOGIN_URL = 'https://time-capsule-final.herokuapp.com/sessions';

export const LogInPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((store) => store.user.errorMessage);
  const dispatch = useDispatch();

  // Added this function, so that if there was any error messages persisted
  // from the sign up page, they are cleared and don't show in the login page
  useEffect(() => {
    dispatch(user.actions.setErrorMessage({ errorMessage: null }));
  }, [dispatch]);

  const handleLogin = (event) => {
    event.preventDefault();

    fetch(LOGIN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password })
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not log in. Please check username - password.');
        }
        return res.json();
      })
      .then((json) => {
        dispatch(user.actions.setUsername({ username: name }));
        dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }));
        window.location.href = '/dashboard';
      })
      .catch((error) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: error.toString() }));
      });
  };

  return (
    <InputSection>
      <Form onSubmit={handleLogin}>
        <Title>Log In</Title>
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
        <Button type="submit">LOG IN</Button>
        {error && <div>{`${error}`}</div>}
        <SubTitle>Not a user?</SubTitle>
        <ButtonLink to="/">CREATE ACCOUNT</ButtonLink>
      </Form>
      <LandingImage src={rocket} alt="rocket" />
    </InputSection>
  );
};
