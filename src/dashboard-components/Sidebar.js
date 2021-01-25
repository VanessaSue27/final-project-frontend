import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { user } from '../reducer/user';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 250px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: papayawhip;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
`;

export const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(user.actions.logout());
    window.location.href = '/';
  };

  return (
    <SidebarContainer>
      <button type="button" onClick={() => dispatch(user.actions.setDashboardContent({ dashboardContent: 'home' }))}>HOME</button>
      <button type="button" onClick={() => dispatch(user.actions.setDashboardContent({ dashboardContent: 'add-new-entry' }))}>Add a New Daily Entry</button>
      <button type="button" onClick={() => dispatch(user.actions.setDashboardContent({ dashboardContent: 'last-entries' }))}>Last 5 Entries</button>
      <button type="button" onClick={() => dispatch(user.actions.setDashboardContent({ dashboardContent: 'weight-history' }))}>Weight History</button>
      <button type="button" onClick={handleLogout}>LOG OUT</button>
    </SidebarContainer>
  );
};
