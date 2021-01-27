import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { user } from '../reducer/user';
import { Icon } from '../styled-components/DashBoardStyles';
import scale from '../assets/scale.png';
import addEntry from '../assets/addentry.png';
import rocketIcon from '../assets/rocket-icon.png';
import homePage from '../assets/homepage.png'
import { StyledBurger, StyledMenu, BurgerButton } from '../styled-components/HamburgerStyling';

export const Menu = ({ open, setOpen }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(user.actions.logout());
    window.location.href = '/';
  };

  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>
      <BurgerButton type="button" onClick={() => dispatch(user.actions.setDashboardContent({ dashboardContent: 'home' }))}><Icon src={homePage} alt="homepage icon" /> HOME </BurgerButton>
      <BurgerButton type="button" onClick={() => dispatch(user.actions.setDashboardContent({ dashboardContent: 'add-new-entry' }))}><Icon src={addEntry} alt="add entry icon" /> New Daily Entry</BurgerButton>
      <BurgerButton type="button" onClick={() => dispatch(user.actions.setDashboardContent({ dashboardContent: 'last-entries' }))}><Icon src={rocketIcon} alt="rocket icon" /> Latest 5 Entries</BurgerButton>
      <BurgerButton type="button" onClick={() => dispatch(user.actions.setDashboardContent({ dashboardContent: 'weight-history' }))}><Icon src={scale} alt="scale icon" /> Weight History</BurgerButton>
      <BurgerButton type="button" onClick={handleLogout}>LOG OUT</BurgerButton>
    </StyledMenu>
  );
};

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};