import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { user } from '../reducer/user';
import { HeaderContainer, HeaderTitle } from '../styled-components/DashBoardStyles';

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HeaderContainer>
      <HeaderTitle> {`Profile of ${babyName}`}</HeaderTitle>
      <h4>{`Member Since: ${moment(createdAt).format('MMMM DD, YYYY')}`}</h4>
      {/* <h4>{`Baby Name: ${babyName}`}</h4> */}
      <h4>{`Gestational Age: ${gestationalAge}`}</h4>
      <h4>{`Time of Birth: ${timeOfBirth}`}</h4>
      <h4>{`Date of Birth: ${moment(dateOfBirth).format('MMMM DD, YYYY')}`}</h4>
      <h4>{`Your infant is ${moment(dateOfBirth).fromNow(true)} old.`}</h4>
    </HeaderContainer>
  );
};
