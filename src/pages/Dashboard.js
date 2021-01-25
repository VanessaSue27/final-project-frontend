import React from 'react';
import { useSelector } from 'react-redux';

import { LogInPage } from './LogInPage';
import { Sidebar } from '../dashboard-components/Sidebar';
import { BabyProfileHeader } from '../dashboard-components/BabyProfileHeader';
import { DashboardMainContent } from '../dashboard-components/DashboardMainContent';
import { PageSection, MainHeader, MainSection } from '../styled-components/DashBoardStyles';

export const Dashboard = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const username = useSelector((store) => store.user.username);

  if (accessToken) {
    return (
      <>
        <PageSection>
          <Sidebar />
          <MainSection>
            <MainHeader>{`Hello, ${username}! Welcome to the Time Capsule 🚀`}</MainHeader>
            <BabyProfileHeader />
            <DashboardMainContent />
          </MainSection>
        </PageSection>
      </>
    );
  } else {
    return (
      <LogInPage />
    );
  }
};
