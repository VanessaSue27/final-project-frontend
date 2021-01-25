import React from 'react';
import { useDispatch } from 'react-redux';

import { user } from '../reducer/user';
import { SidebarContainer, SideBarButton, LogOutButton } from '../styled-components/DashBoardStyles';

export const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(user.actions.logout());
    window.location.href = '/';
  };

  return (
    <SidebarContainer>
      <SideBarButton type="button" onClick={() => dispatch(user.actions.setDashboardContent({ dashboardContent: 'home' }))}>HOME </SideBarButton>
      <SideBarButton type="button" onClick={() => dispatch(user.actions.setDashboardContent({ dashboardContent: 'add-new-entry' }))}>Add a New Daily Entry</SideBarButton>
      <SideBarButton type="button" onClick={() => dispatch(user.actions.setDashboardContent({ dashboardContent: 'last-entries' }))}>Last 5 Entries</SideBarButton>
      <SideBarButton type="button" onClick={() => dispatch(user.actions.setDashboardContent({ dashboardContent: 'weight-history' }))}>Weight History</SideBarButton>
      <LogOutButton type="button" onClick={handleLogout}>LOG OUT</LogOutButton>
    </SidebarContainer>
  );
};
