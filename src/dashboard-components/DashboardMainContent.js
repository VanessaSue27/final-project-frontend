import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { DashboardHome } from './DashboardHome';
import { LastEntries } from './LastEntries';
import { AddNewEntry } from './AddNewEntry';
import { WeightHistory } from './WeightHistory';

const DashboardMainContainer = styled.main`
  margin-left: 250px; /* Same as the width of the sidebar */
`;

export const DashboardMainContent = () => {
  const dashboardContent = useSelector((store) => store.user.dashboardContent);

  return (
    <DashboardMainContainer>
      {dashboardContent === 'home' && <DashboardHome />}
      {dashboardContent === 'add-new-entry' && <AddNewEntry />}
      {dashboardContent === 'last-entries' && <LastEntries />}
      {dashboardContent === 'weight-history' && <WeightHistory />}
    </DashboardMainContainer>
  )
};
