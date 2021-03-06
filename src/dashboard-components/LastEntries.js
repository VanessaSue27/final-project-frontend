/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import swal from 'sweetalert';

import { user } from '../reducer/user';

import { EntriesSection, EntriesTitle, EntryCard, DeleteButton, EditButton, ButtonsContainer, EntriesText } from '../styled-components/LastEntriesStyles';

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

  const handleDelete = (entryId) => {
    const DELETEENTRIES_URL = `https://time-capsule-final.herokuapp.com/entries/${entryId}`;

    fetch(DELETEENTRIES_URL, {
      method: 'DELETE',
      headers: { Authorization: accessToken }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not delete entry.');
        }
        return res.json();
      })
      .catch((error) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: error.toString() }));
      });
  };

  const handleClick = (entryId) => {
    swal({
      title: 'DANGER ZONE! Are you sure you want to delete this entry?',
      text: "Once deleted, you can't recover it",
      buttons: true,
      dangerMode: true,
      icon: 'warning'
    })
      .then((willDelete) => {
        if (willDelete) {
          handleDelete(entryId);
          swal({
            title: 'Entry deleted successfully',
            icon: 'success',
            buttons: true
          })
            .then(() => {
              window.location.reload();
            });
        }
      });
  };

  const handleEdit = (entry) => {
    dispatch(user.actions.setDashboardContent({ dashboardContent: 'edit-entry' }));
    dispatch(user.actions.setEntry({ entry }));
  };

  return (
    <EntriesSection>
      <EntriesTitle>Latest 5 Entries</EntriesTitle>
      {entriesData.map((entry) => (
        <EntryCard key={entry._id}>
          <EntriesText>{`Entry created on:  ${moment(entry.createdAt).format('MMMM DD, YYYY')}`}</EntriesText>
          <EntriesText>{`Daily Activities:  ${entry.dailyActivities.join(', ')}`}</EntriesText>
          <EntriesText>{`Daily Weight:  ${entry.dailyWeight} grams`}</EntriesText>
          <EntriesText>{`Daily Reflection:  ${entry.dailyReflection}`}</EntriesText>
          <ButtonsContainer>
            <EditButton type="button" onClick={() => handleEdit(entry)}>Edit</EditButton>
            <DeleteButton type="button" onClick={() => handleClick(entry._id)}>Delete</DeleteButton>
          </ButtonsContainer>
        </EntryCard>
      ))}
    </EntriesSection>
  );
};
