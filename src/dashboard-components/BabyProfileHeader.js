import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { user } from '../reducer/user';
import robot from '../assets/robot.png';
import { HeaderContainer, HeaderTitle, HeaderText, ProfileImage } from '../styled-components/DashBoardStyles';

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
    <>
      <HeaderContainer>
        <ProfileImage src={robot} />
        <HeaderTitle> {`${babyName}`}</HeaderTitle>
        <HeaderText>{`Member Since: ${moment(createdAt).format('MMMM DD, YYYY')}`}</HeaderText>
        <HeaderText>{`Gestational Age: ${gestationalAge}`}</HeaderText>
        <HeaderText>{`Time of Birth: ${timeOfBirth}`}</HeaderText>
        <HeaderText>{`Date of Birth: ${moment(dateOfBirth).format('MMMM DD, YYYY')}`}</HeaderText>
        <HeaderText>{`${babyName} is ${moment(dateOfBirth).fromNow(true)} old.`}</HeaderText>
      </HeaderContainer>
    </>
  );
};
