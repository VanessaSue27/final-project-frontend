import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';

import { user } from '../reducer/user';

const HeaderContainer = styled.header`
  margin-left: 250px; /* Same as the width of the sidebar */
  background-color: lightblue;
  height: 300px;
`;

const HeaderTitle = styled.h2`
  margin-top: 0;
`;

export const BabyProfileHeader = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const [babyProfileData, setBabyProfileData] = useState({});
  const { createdAt, babyName, gestationalAge, timeOfBirth, dateOfBirth } = babyProfileData;

  const GETPROFILE_URL = 'https://time-capsule-final.herokuapp.com/profiles';

  const getBabyDetails = () => {
    fetch(GETPROFILE_URL, {
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
        setBabyProfileData(json);
      })
      .catch((error) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: error.toString() }));
      });
  };

  useEffect(() => {
    getBabyDetails();
  }, []);

  return (
    <HeaderContainer>
      <HeaderTitle>Baby Profile Data comes here...</HeaderTitle>
      <h4>{`Member Since: ${moment(createdAt).format('MMMM DD, YYYY')}`}</h4>
      <h4>{`Baby Name: ${babyName}`}</h4>
      <h4>{`Gestational Age: ${gestationalAge}`}</h4>
      <h4>{`Time of Birth: ${timeOfBirth}`}</h4>
      <h4>{`Date of Birth: ${moment(dateOfBirth).format('MMMM DD, YYYY')}`}</h4>
    </HeaderContainer>
  );
};
