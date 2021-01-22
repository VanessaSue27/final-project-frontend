import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';

import { user } from '../reducer/user';

export const BabyProfileForm = () => {
  const [babyName, setBabyName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [timeOfBirth, setTimeOfBirth] = useState('');
  const [gestationalAge, setGestationalAge] = useState();
  const [weight, setWeight] = useState();
  const [length, setLength] = useState();
  const [sex, setSex] = useState('');

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
        <label htmlFor="nameInput">
          <p>Baby name:</p>
          <input
            id="nameInput"
            type="text"
            value={babyName}
            onChange={(event) => setBabyName(event.target.value)}
            minLength="3"
            maxLength="20"
            required />
        </label>

        <label>
          <p>Sex:</p>
          <select
            value={sex}
            onChange={(event) => setSex(event.target.value)}
            required>
            <option value="">Select</option>
            <option value="Girl">Girl</option>
            <option value="Boy">Boy</option>
            <option value="Not Disclosed"> Prefer not to disclose</option>
          </select>
        </label>

        <label>
          <p>Date of Birth:</p>
          <DatePicker
            selected={dateOfBirth}
            onChange={(dateOfBirth) => setDateOfBirth(dateOfBirth)}
            showWeekNumbers
            required />
        </label>

        <label>
          <p>Time of Birth:</p>
          <TimePicker
            onChange={(timeOfBirth) => setTimeOfBirth(timeOfBirth)}
            value={timeOfBirth}
            required />
        </label>

        <label>
          <p>Gestational age (in weeks):</p>
          <input
            type="number"
            min="23"
            max="50"
            value={gestationalAge}
            onChange={(event) => setGestationalAge(event.target.value)}
            required />
        </label>

        <label>
          <p>Weight (in grams):</p>
          <input
            type="number"
            min="500"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
            required />
        </label>

        <label>
          <p>Length (in cm):</p>
          <input
            type="number"
            min="10"
            max="200"
            value={length}
            onChange={(event) => setLength(event.target.value)}
            required />
        </label>

        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};
