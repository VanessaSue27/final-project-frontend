import React from 'react';
import { useSelector } from 'react-redux';

import { DashboardHome } from './DashboardHome';
import { LastEntries } from './LastEntries';
import { AddNewEntry } from './AddNewEntry';
import { WeightHistory } from './WeightHistory';
import { DashboardMainContainer } from '../styled-components/DashBoardStyles';

export const DashboardMainContent = () => {
  const dashboardContent = useSelector((store) => store.user.dashboardContent);

  return (
    <DashboardMainContainer>
      {dashboardContent === 'home' && <DashboardHome />}
      {dashboardContent === 'add-new-entry' && <AddNewEntry />}
      {dashboardContent === 'last-entries' && <LastEntries />}
      {dashboardContent === 'weight-history' && <WeightHistory />}
    </DashboardMainContainer>
  );
};
