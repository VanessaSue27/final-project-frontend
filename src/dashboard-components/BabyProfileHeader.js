import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { user } from '../reducer/user';
import robot from '../assets/robot.png';
import { HeaderContainer, HeaderTitle, HeaderText, ProfileImage, ImageContainer, HeaderTextContainer } from '../styled-components/DashBoardStyles';
import { UploadButton } from '../styled-components/GlobalStyles';

export const BabyProfileHeader = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const [babyProfileData, setBabyProfileData] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [profileImage, setProfileImage] = useState({ preview: '', raw: '' });
  const { createdAt, babyName, gestationalAge, timeOfBirth, dateOfBirth, profileImageUrl } = babyProfileData;
  const imageInput = useRef()

  // const GETPROFILE_URL = 'https://time-capsule-final.herokuapp.com/profiles';
  const GETPROFILE_URL = 'http://localhost:8080/profiles';
  const IMAGE_URL = 'http://localhost:8080/profile/image';

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
          throw new Error('Oops! Could not save profile picture.');
        }
        return res.json();
      })
      .catch((error) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: error.toString() }));
      });
  };

  // const handleChange = (event) => {
  //   if (event.target.files.length) {
  //     setProfileImage({
  //       preview: URL.createObjectURL(event.target.files[0]),
  //       raw: event.target.files[0]
  //     });
  //   }
  // };

  return (
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
        <HeaderText>{`Gestational Age: ${gestationalAge}`}</HeaderText>
        <HeaderText>{`Time of Birth: ${timeOfBirth}`}</HeaderText>
        <HeaderText>{`Date of Birth: ${moment(dateOfBirth).format('MMMM DD, YYYY')}`}</HeaderText>
        <HeaderText>{`${babyName} is ${moment(dateOfBirth).fromNow(true)} old.`}</HeaderText>
      </HeaderTextContainer>
    </HeaderContainer>
  );
};
