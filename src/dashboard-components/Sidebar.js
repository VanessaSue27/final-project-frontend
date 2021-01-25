import React from 'react';
import { useDispatch } from 'react-redux';

import { user } from '../reducer/user';
import { SidebarContainer, SideBarButton, LogOutButton, Icon } from '../styled-components/DashBoardStyles';
import scale from '../assets/scale.png';
import addEntry from '../assets/addentry.png';
import rocketIcon from '../assets/rocket-icon.png';
import homePage from '../assets/homepage.png'


export const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(user.actions.logout());
    window.location.href = '/';
  };

  return (
    <>
      <SidebarContainer>
        <SideBarButton type="button" onClick={() => dispatch(user.actions.setDashboardContent({ dashboardContent: 'home' }))}><Icon src={homePage} alt="homepage icon" /> HOME </SideBarButton>
        <SideBarButton type="button" onClick={() => dispatch(user.actions.setDashboardContent({ dashboardContent: 'add-new-entry' }))}><Icon src={addEntry} alt="add entry icon" /> New Daily Entry</SideBarButton>
        <SideBarButton type="button" onClick={() => dispatch(user.actions.setDashboardContent({ dashboardContent: 'last-entries' }))}><Icon src={rocketIcon} alt="rocket icon" /> Latest 5 Entries</SideBarButton>
        <SideBarButton type="button" onClick={() => dispatch(user.actions.setDashboardContent({ dashboardContent: 'weight-history' }))}><Icon src={scale} alt="scale icon" /> Weight History</SideBarButton>
        <LogOutButton type="button" onClick={handleLogout}>LOG OUT</LogOutButton>
      </SidebarContainer>
    </>
  );
};
