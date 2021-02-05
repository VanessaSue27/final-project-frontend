import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { user } from '../reducer/user';
import robot from '../assets/robot.png';
import { HeaderContainer, HeaderTitle, HeaderText, ProfileImage, ImageContainer, HeaderTextContainer } from '../styled-components/DashBoardStyles';
import { UploadButton, ImageErrorMessage } from '../styled-components/GlobalStyles';

export const BabyProfileHeader = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const [babyProfileData, setBabyProfileData] = useState({});
  const [imageError, setImageError] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [profileImage, setProfileImage] = useState();
  const { createdAt, babyName, gestationalAge, timeOfBirth, dateOfBirth, profileImageUrl } = babyProfileData;
  const imageInput = useRef()

  const GETPROFILE_URL = 'https://time-capsule-final.herokuapp.com/profiles';
  const IMAGE_URL = 'https://time-capsule-final.herokuapp.com/profile/image';

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

  const uploadImage = () => {
    const formData = new FormData()
    formData.append('image', imageInput.current.files[0]);

    fetch(IMAGE_URL, {
      method: 'POST',
      headers: { Authorization: accessToken },
      body: formData
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Oops! Choose a picture first! (formats: png/jpg/jpeg)');
        }
        return res.json();
      })
      .then(() => {
        window.location.reload()
      })
      .catch((error) => {
        setImageError(error.toString());
      });
  };

  return (
    <>
      <HeaderContainer>
        <ImageContainer>
          <label htmlFor="profilepic-button">
            {profileImageUrl ? (<ProfileImage src={`${profileImageUrl}`} alt="profile-pic" />) : (<ProfileImage src={robot} alt="robot" />)}
          </label>
        </ImageContainer>
        <input
          type="file"
          ref={imageInput}
          id="profilepic-button"
          style={{ display: 'none' }}
          onChange={(event) => setProfileImage(event.target.value)}
          accept="image/png, image/jpeg, image/jpg" />
        <UploadButton type="submit" onClick={uploadImage}>Upload</UploadButton>
        <HeaderTextContainer>
          <HeaderTitle> {`${babyName}`}</HeaderTitle>
          <HeaderText>{`Member Since: ${moment(createdAt).format('MMMM DD, YYYY')}`}</HeaderText>
          <HeaderText>{`Gestational Age: ${gestationalAge} weeks`}</HeaderText>
          <HeaderText>{`Time of Birth: ${timeOfBirth}`}</HeaderText>
          <HeaderText>{`Date of Birth: ${moment(dateOfBirth).format('MMMM DD, YYYY')}`}</HeaderText>
          <HeaderText>{`${babyName} is ${moment(dateOfBirth).fromNow(true)} old.`}</HeaderText>
        </HeaderTextContainer>
      </HeaderContainer>
      {imageError && <ImageErrorMessage>{imageError}</ImageErrorMessage>}
    </>
  );
};
