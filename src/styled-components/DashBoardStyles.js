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

  @media (min-width: 320px) and (max-width: 1023px) {
    width:100%;
  };
`;

export const MainHeader = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 30px;
  font-family: 'Roboto Slab', sans-serif;
  color: rgb(234,70,100);
  margin-left: 250px;
  height: 100px;
  margin-top: 7%;
  border-radius: 16px;
  background-color: rgb(242,240,240, 0.6);
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5);

  @media (max-width: 668px) {
    width: 75%;
    margin-left: 10%;
    margin-top: 22%;
    font-size: 20px;
    padding: 5px;
  }

  @media (min-width: 669px) and (max-width: 1023px) {
    width:85%;
    margin-left:8%;
    margin-top: 15%;
  }
`;

export const HeaderContainer = styled.div`
  width: 80%;  
  display: flex;
  flex-direction: column;
  text-align:center;
  padding: 10px;
  margin-left: 250px;
  margin-top: 2%;
  border-radius: 20px;
  color: rgb(242,240,240);
  background-color: rgb(80,91,211,0.7);
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.8); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.8);

  @media (min-width: 320px) and (max-width: 1023px) {
    width: 100%;
    margin-left:0;
    padding: 0;
  };
`;

export const HeaderText = styled.p`
  font-size: 15px;
  line-height:0;
  font-family: 'Roboto Slab', sans-serif;
`;

export const DashboardMainContainer = styled.div`
  margin-left: 250px;
  width: 82%;
  height: 60%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  text-align:center;
  font-size: 30px;
  font-family: 'Roboto Slab', sans-serif;
  color:rgb(63,177,181);
  margin-top: 3%;
  margin-bottom: 4%;
  border-radius: 16px;
  background-color: rgb(242,240,240, 0.6);
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5);

  @media (min-width: 320px) and (max-width: 1023px) {
    width: 100%;
    margin-left: 0;
    margin-bottom:0;
    margin-top:5px;
    border-radius:0;
  };
`;

export const RandomFact = styled.h3`
  font-size: 30px;
  color: rgb(240,96,122);
`;

export const HeaderTitle = styled.h2`
  text-align: center;
  margin-top: 10px;
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%; /* Full-height: remove this if you want "auto" height */
  width: 300px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  top: 5%;
  bottom: 5%;
  margin-left: 20px;
  left: 0;
  border-radius: 8px;
  padding-top: 20px;
  background-color: rgb(242,240,240, 0.6);
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5);
  
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const SideBarButton = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content:center;
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
      border-radius: 10px;
      cursor: pointer
    }
  
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
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