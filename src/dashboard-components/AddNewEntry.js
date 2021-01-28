/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { user } from '../reducer/user';
import { FormLabel, InputField, SubmitButton, ErrorMessage } from '../styled-components/GlobalStyles';
import { CheckboxesContainer, CheckboxLabel, DailyEntryForm, DailyEntryTitle, DailyReflectionText, TextArea } from '../styled-components/DailyEntriesFormStyles'

const POSTENTRY_URL = 'https://time-capsule-final.herokuapp.com/entries';

const activities = [
  'Hold',
  'Massage',
  'Read',
  'Sing',
  'Bath',
  'Skin-to-Skin'
];

export const AddNewEntry = () => {
  const [dailyActivities, setDailyActivities] = useState([]);
  const [dailyWeight, setDailyWeight] = useState(0);
  const [dailyReflection, setDailyReflection] = useState('');

  const accessToken = useSelector((store) => store.user.accessToken);
  const error = useSelector((store) => store.user.errorMessage);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(POSTENTRY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({ dailyActivities, dailyWeight, dailyReflection })
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Unable to save new entry');
        } else {
          return res.json();
        }
      })
      .then((json) => {
        dispatch(user.actions.setDashboardContent({ dashboardContent: 'last-entries' }));
      })
      // eslint-disable-next-line no-shadow
      .catch((error) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: error.toString() }));
      });
  };

  const onTypeChange = (item) => {
    dailyActivities.includes(item)
      ? setDailyActivities(dailyActivities.filter((index) => index !== item))
      : setDailyActivities([...dailyActivities, item]);
  };

  return (
    <>
      <DailyEntryTitle>Daily Entry Form</DailyEntryTitle>
      <DailyEntryForm onSubmit={handleSubmit}>
        <CheckboxesContainer>
          {activities.map((item) => (
            <CheckboxLabel className="checkbox-container" htmlFor={`activities-${item}`} key={item}>
              <input
                id={`activities-${item}`}
                name="daily-activities"
                type="checkbox"
                checked={dailyActivities.includes(item)}
                onChange={() => onTypeChange(item)} />
              {item}
              <span className="custom-checkbox" />
            </CheckboxLabel>
          ))}
        </CheckboxesContainer>
        <FormLabel>
              Weight (in grams)
          <InputField
            type="number"
            min="500"
            value={dailyWeight}
            onChange={(event) => setDailyWeight(event.target.value)}
            required />
        </FormLabel>
        <DailyReflectionText>Daily Reflection</DailyReflectionText>
        <TextArea
          rows="3"
          maxLength="300"
          placeholder="Write a reflection, thought, milestone or anything else you want to treasure!"
          onChange={(event) => setDailyReflection(event.target.value)} />
        {error && <ErrorMessage>{`${error}`}</ErrorMessage>}
        <SubmitButton type="submit">SUBMIT</SubmitButton>
      </DailyEntryForm>
    </>
  );
};
