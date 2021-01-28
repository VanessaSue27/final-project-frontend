/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { user } from '../reducer/user';
import { Section, UserForm, FormLabel, InputField, SubmitButton, ErrorMessage } from '../styled-components/GlobalStyles';

const activities = [
  'Hold',
  'Skin-to-Skin',
  'Read',
  'Sing',
  'Bath',
  'Massage'
];

export const EditEntryPage = () => {
  const entry = useSelector((store) => store.user.entry);
  const accessToken = useSelector((store) => store.user.accessToken);
  const error = useSelector((store) => store.user.errorMessage);

  const dispatch = useDispatch();

  // Not sure how to set the initial state for dailyActivities so that it shows the
  // previously chosen ones, maybe because it's an array? :( ...)
  const [dailyActivities, setDailyActivities] = useState([]);
  const [dailyWeight, setDailyWeight] = useState(entry.dailyWeight);
  const [dailyReflection, setDailyReflection] = useState(entry.dailyReflection);

  const onTypeChange = (item) => {
    dailyActivities.includes(item)
      ? setDailyActivities(dailyActivities.filter((index) => index !== item))
      : setDailyActivities([...dailyActivities, item]);
  };

  const handleEdit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-underscore-dangle
    const EDITENTRY_URL = `https://time-capsule-final.herokuapp.com/entries/${entry._id}`;

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
        // console logs a message saying the entry was updated successfully
        console.log(json);
        dispatch(user.actions.setDashboardContent({ dashboardContent: 'last-entries' }));
        localStorage.removeItem('entry');
        dispatch(user.actions.setEntry({ entry: null }));
      })
      .catch((error) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: error.toString() }));
      });
  };

  return (
    <>
      <Section>
        <UserForm onSubmit={handleEdit}>
          <p>{`Editing entry created on: ${moment(entry.createdAt).format('MMMM DD, YYYY')}`}</p>
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
            value={dailyReflection}
            onChange={(event) => setDailyReflection(event.target.value)} />
          {error && <ErrorMessage>{`${error}`}</ErrorMessage>}
          <SubmitButton type="submit">UPDATE ENTRY</SubmitButton>
        </UserForm>
      </Section>
    </>
  );
};
