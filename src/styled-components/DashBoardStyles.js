import styled from 'styled-components';
import background from '../assets/background.jpg'

export const PageSection = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction:row;
  justify-content: center;
  font-family:'Roboto Slab', sans-serif;
`;

export const MainSection = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  width: 80%;  
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 250px;
  margin-top: 6%;
  border-radius: 20px;
  line-height: 0px;
  color: rgb(242,240,240);
  background-color: rgb(80,91,211,0.7);
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.8); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.8);
`;

export const DashboardMainContainer = styled.div`
  margin-left: 250px;
`;

export const HeaderTitle = styled.h2`
  text-align: center;
  margin-top: 10px;
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(242,240,240, 0.6);
  height: 90%; /* Full-height: remove this if you want "auto" height */
  width: 300px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  top: 5%;
  bottom: 5%;
  margin-left:20px;
  left: 0;
  border-radius: 8px;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5);
`;

export const SideBarButton = styled.button`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  background-color: rgb(242,240,240, 0.6);
  height: 50px;
  border-radius: 20px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom:40px;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 20px;
  color: rgb(240,96,122);
  border: none;
    &:hover {
      background: rgb(63,177,181);
      color: rgb(253,253,253);
      transform: scale(1.1);
      border-radius: 20px;
      cursor: pointer
    }
`;

export const LogOutButton = styled.button`
  position: absolute;
  top: 90%;
  left: 10%;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  width: 230px;
  height: 50px;
  border-radius: 20px;
  padding: 10px;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 20px;
  background: rgb(240,96,122);
  color: #fff;
  border: none;
    &:hover {
      background: rgb(63,177,181);
      transform: scale(1.1);
      cursor: pointer
    }
`;

