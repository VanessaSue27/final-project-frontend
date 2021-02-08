/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { user } from '../reducer/user';

import { CheckboxesContainer, DailyEntryForm, DailyEntryTitle, TextArea, CheckboxLabel, DailyReflectionText } from '../styled-components/DailyEntriesFormStyles';
import { FormLabel, InputField, SubmitButton, ErrorMessage } from '../styled-components/MainStyles';

const activities = [
  'Hold',
  'Skin-to-Skin',
  'Read',
  'Sing',
  'Bath',
  'Massage'
];

export const EditEntryPage = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const entry = useSelector((store) => store.user.entry);
  const errorText = useSelector((store) => store.user.errorMessage);
  const dispatch = useDispatch();

  const [dailyActivities, setDailyActivities] = useState(entry.dailyActivities ?? []);
  const [dailyWeight, setDailyWeight] = useState(entry.dailyWeight);
  const [dailyReflection, setDailyReflection] = useState(entry.dailyReflection);
  const [checkboxRequired, setCheckboxRequired] = useState(false);

  const onTypeChange = (item) => {
    dailyActivities.includes(item)
      ? setDailyActivities(dailyActivities.filter((index) => index !== item))
      : setDailyActivities([...dailyActivities, item]);
  };

  const handleEdit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-underscore-dangle
    const EDITENTRY_URL = `https://time-capsule-final.herokuapp.com/entries/${entry._id}`;

    if (dailyActivities.length > 0) {
      fetch(EDITENTRY_URL, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken
        },
        body: JSON.stringify({ dailyActivities, dailyWeight, dailyReflection })
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Could not update entry.');
          }
          return res.json();
        })
        .then((json) => {
          dispatch(user.actions.setDashboardContent({ dashboardContent: 'last-entries' }));
          localStorage.removeItem('entry');
          dispatch(user.actions.setEntry({ entry: null }));
        })
        .catch((error) => {
          dispatch(user.actions.setErrorMessage({ errorMessage: error.toString() }));
        });
    } else {
      setCheckboxRequired(true);
    }
  };

  return (
    <DailyEntryForm onSubmit={handleEdit}>
      <DailyEntryTitle>{`Editing entry from: ${moment(entry.createdAt).format('MMMM DD, YYYY')}`}</DailyEntryTitle>
      <FormLabel>Which activities have you done today?</FormLabel>
      <CheckboxesContainer>
        {activities.map((item) => (
          <CheckboxLabel className="checkbox-container" htmlFor={`activities-${item}`} key={item}>
            <input
              id={`activities-${item}`}
              name="daily activities"
              type="checkbox"
              checked={dailyActivities.includes(item)}
              onChange={() => onTypeChange(item)} />
            {item}
            <span className="custom-checkbox" />
          </CheckboxLabel>
        ))}
      </CheckboxesContainer>
      {checkboxRequired && <ErrorMessage>Please choose one of the options above!</ErrorMessage>}
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
        value={dailyReflection}
        onChange={(event) => setDailyReflection(event.target.value)} />
      {errorText && <ErrorMessage>{`${errorText}`}</ErrorMessage>}
      <SubmitButton type="submit">UPDATE ENTRY</SubmitButton>
    </DailyEntryForm>
  );
};
