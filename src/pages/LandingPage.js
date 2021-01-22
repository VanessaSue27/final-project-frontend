import React from 'react';
import { useSelector } from 'react-redux';

import { SignUpPage } from './SignUpPage';
import { LogInPage } from './LogInPage';
import { BabyProfileForm } from './BabyProfileForm';
import { Dashboard } from './Dashboard';

// Page where the user can Sign up for a new account or
// click link to Log In page if already existing user

export const LandingPage = () => {
  const currentPage = useSelector((store) => store.user.page);
  const accessToken = useSelector((store) => store.user.accessToken);

  if (accessToken) {
    return (
      <>
        {currentPage === 'babyProfileForm' && <BabyProfileForm />}
        {currentPage === 'dashboard' && <Dashboard />}
      </>
    );
  }

  return (
    <>
      {currentPage === 'signup' && <SignUpPage />}
      {currentPage === 'login' && <LogInPage />}
    </>
  );
};
