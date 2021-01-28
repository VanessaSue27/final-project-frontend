/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import swal from 'sweetalert';

import { user } from '../reducer/user';
import { EntriesSection, EntriesTitle, EntryCard, DeleteButton } from '../styled-components/LastEntriesStyles';

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
      .then((json) => {
        // console logs a message saying the entry was deleted successfully
        console.log(json);
      })
      .catch((error) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: error.toString() }));
      });
  };

  const handleEdit = (entry) => {
    dispatch(user.actions.setDashboardContent({ dashboardContent: 'edit-entry' }));
    dispatch(user.actions.setEntry({ entry }));
  };

  const handleClick = (entryId) => {
    swal({
      title: 'DANGER ZONE! Are you sure you want to delete entry?',
      text: "Once deleted, you can't recover it",
      buttons: true,
      dangerMode: true,
      icon: 'warning'
    }).then((willDelete) => {
      if (willDelete) {
        handleDelete(entryId)
        swal({
          title: 'Entry deleted successfully',
          icon: 'success',
          buttons: true
        }).then(() => {
          window.location.reload();
        });
      }
    });
  };

  return (
    <>
      <EntriesSection>
        <EntriesTitle>Latest Entries</EntriesTitle>
        {entriesData.map((entry) => (
          <EntryCard key={entry._id}>
            <DeleteButton type="button" onClick={() => handleClick(entry._id)}> X </DeleteButton>
            <p>{`Entry created on: ${moment(entry.createdAt).format('MMMM DD, YYYY')}`}</p>
            <p>{`Daily Activities: ${entry.dailyActivities.join(', ')}`}</p>
            <p>{`Daily Weight: ${entry.dailyWeight} grams`}</p>
            <p>{`Daily Reflection: ${entry.dailyReflection}`}</p>
            <button type="button" onClick={() => handleEdit(entry)}>Edit Entry</button>
          </EntryCard>
        ))}
      </EntriesSection>
    </>
  );
};
