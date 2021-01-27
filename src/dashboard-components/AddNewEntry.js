/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { user } from '../reducer/user';
import { Section, UserForm, FormLabel, InputField, SubmitButton } from '../styled-components/GlobalStyles';

const POSTENTRY_URL = 'https://time-capsule-final.herokuapp.com/entries';

const activities = [
  'Hold',
  'Skin-to-Skin',
  'Read',
  'Sing',
  'Bath',
  'Massage'
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
        // Shows in console a message saying the profile was saved successfully
        console.log(json);
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
      <Section>
        <UserForm onSubmit={handleSubmit}>
          <p>Activities</p>
          <div>
            {activities.map((item) => (
              <label htmlFor="activities" key={item}>
                <input
                  id="activities"
                  name="daily activities"
                  type="checkbox"
                  checked={dailyActivities.includes(item)}
                  onChange={() => onTypeChange(item)} />
                {item}
              </label>
            ))}
          </div>
          <FormLabel>
              Weight (in grams)
            <InputField
              type="number"
              min="500"
              value={dailyWeight}
              onChange={(event) => setDailyWeight(event.target.value)}
              required />
          </FormLabel>
          <p>Daily Reflection(not mandatory, but we reccomend it so you keep those memories!)</p>
          <textarea
            rows="3"
            maxLength="300"
            placeholder="Write a reflection, thought or a milestone or anything else you want!"
            onChange={(event) => setDailyReflection(event.target.value)} />
          {error && <div>{`${error}`}</div>}
          <SubmitButton type="submit">SUBMIT</SubmitButton>
        </UserForm>
      </Section>
    </>
  );
};
