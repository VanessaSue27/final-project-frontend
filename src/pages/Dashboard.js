import React from 'react';
import { useSelector } from 'react-redux';

import { SignUpPage } from './SignUpPage';
import { Sidebar } from '../dashboard-components/Sidebar';
import { BabyProfileHeader } from '../dashboard-components/BabyProfileHeader';
import { DashboardMainContent } from '../dashboard-components/DashboardMainContent';

export const Dashboard = () => {
  const accessToken = useSelector((store) => store.user.accessToken);

  if (accessToken) {
    return (
      <>
        <Sidebar />
        <BabyProfileHeader />
        <DashboardMainContent />
      </>
    );
  } else {
    return (
      <SignUpPage />
    );
  }
};
