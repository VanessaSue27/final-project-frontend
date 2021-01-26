import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';

import { user } from '../reducer/user';

const EntryContainer = styled.div`
  border: 2px solid black;
  font-size: 16px;
  width: 500px;
`;

const EntriesSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const LastEntries = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const [entriesData, setEntriesData] = useState([]);

  const GETENTRIES_URL = 'https://time-capsule-final.herokuapp.com/entries/latest';

  const getEntriesData = () => {
    fetch(GETENTRIES_URL, {
      method: 'GET',
      headers: { Authorization: accessToken }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not get information.');
        }
        return res.json();
      })
      .then((json) => {
        setEntriesData(json);
      })
      .catch((error) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: error.toString() }));
      });
  };

  useEffect(() => {
    getEntriesData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Last 5 Entries Section!</h1>
      <EntriesSection>
        {entriesData.map((entry) => (
          <EntryContainer>
            <p>{`Entry created on: ${moment(entry.createdAt).format('MMMM DD, YYYY')}`}</p>
            <p>{`Daily Activities: ${entry.dailyActivities.join(', ')}`}</p>
            <p>{`Daily Weight: ${entry.dailyWeight}`}</p>
            <p>{`Daily Reflection: ${entry.dailyReflection}`}</p>
          </EntryContainer>
        ))}
      </EntriesSection>
    </>
  );
};
