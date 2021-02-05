import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';

import { Dropdown, Section, InputField, UserForm, SubmitButton, FormLabel, Title, SubTitle } from 'styled-components/GlobalStyles';
import { Instructions } from 'styled-components/DashBoardStyles';
import { user } from '../reducer/user';
import { LogInPage } from './LogInPage';

const PROFILE_URL = 'https://time-capsule-final.herokuapp.com/profiles';

export const BabyProfileForm = () => {
  const [babyName, setBabyName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [timeOfBirth, setTimeOfBirth] = useState('');
  const [gestationalAge, setGestationalAge] = useState(23);
  const [weight, setWeight] = useState(500);
  const [length, setLength] = useState(10);
  const [sex, setSex] = useState('');

  const username = useSelector((store) => store.user.username);
  const accessToken = useSelector((store) => store.user.accessToken);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(PROFILE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({ babyName, dateOfBirth, timeOfBirth, sex, gestationalAge, weight, length })
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Unable to save profile.');
        } else {
          return res.json();
        }
      })
      .then((json) => {
        // Shows in console a message saying the profile was saved successfully
        console.log(json);
        window.location.href = '/dashboard';
      })
      .catch((error) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: error.toString() }));
      });
  };

  if (accessToken) {
    return (
      <>
        <Section>
          <UserForm onSubmit={handleSubmit}>
            <Title>{`Welcome, ${username}!`}</Title>
            <SubTitle> Build your infant profile here!</SubTitle>
            <Instructions>All fields are mandatory. Only one Infant profile per account</Instructions>
            <FormLabel htmlFor="nameInput">
                Baby name
              <InputField
                id="nameInput"
                type="text"
                value={babyName}
                onChange={(event) => setBabyName(event.target.value)}
                minLength="3"
                maxLength="20"
                required />
            </FormLabel>

            <FormLabel>
                Sex
              <Dropdown
                value={sex}
                onChange={(event) => setSex(event.target.value)}
                required>
                <option value="">Select</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Not Disclosed"> Prefer not to disclose</option>
              </Dropdown>
            </FormLabel>

            <FormLabel>Date of Birth</FormLabel>
            <DatePicker
              selected={dateOfBirth}
              onChange={(dateOfBirth) => setDateOfBirth(dateOfBirth)}
              showWeekNumbers
              required />

            <FormLabel>
              Time of Birth
              <TimePicker
                onChange={(timeOfBirth) => setTimeOfBirth(timeOfBirth)}
                value={timeOfBirth}
                closeClock
                disableClock
                required />
            </FormLabel>

            <FormLabel>
              Gestational age (in weeks)
              <InputField
                type="number"
                min="23"
                max="50"
                value={gestationalAge}
                onChange={(event) => setGestationalAge(event.target.value)}
                required />
            </FormLabel>

            <FormLabel>
              Weight (in grams)
              <InputField
                type="number"
                min="500"
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
                required />
            </FormLabel>

            <FormLabel>
              Length (in cm)
              <InputField
                type="number"
                min="10"
                max="200"
                value={length}
                onChange={(event) => setLength(event.target.value)}
                required />
            </FormLabel>
            <SubmitButton type="submit">CREATE PROFILE</SubmitButton>
          </UserForm>
        </Section>
      </>
    );
  } else {
    return (
      <LogInPage />
    );
  }
};
