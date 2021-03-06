import styled from 'styled-components/macro';
import background from '../assets/background.jpg';

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
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

export const MainSection = styled.div`
  width: 83%;
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) and (max-width: 1023px) {
    width: 100%;
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
  margin-top: 30px;

  @media (max-width: 668px) {
    width: 75%;
    margin-left: 70px;
    font-size: 20px;
    padding: 0;
  }

  @media (min-width: 669px) and (max-width: 1023px) {
    width: 85%;
    margin-left: 70px;
    margin-bottom: 30px;
  }
`;

export const HeaderContainer = styled.div`
  width: 60%; 
  max-height: 500px; 
  display: flex;
  flex-direction: row;
  text-align: left;
  padding: 10px;
  margin-left: 355px;
  margin-top: 15px;
  border-radius: 20px;
  color: rgb(242,240,240);
  background-color: rgb(80,91,211);
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.8); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.8);

  @media (max-width: 668px) {
    width: 100%;
    max-height: 55%;
    margin-left: 0;
    margin-bottom:1px;
    padding: 0;
  };

  @media (min-width: 669px) and (max-width: 1023px) {
    width: 85%;
    margin-left: 8%;
    margin-top: 0;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: left;  
  align-items: center;
  cursor: pointer;
`;

export const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  @media (max-width: 668px) {
  margin-left: 20px;
  padding-bottom: 5px;
  }
`;

export const HeaderText = styled.p`
  font-size: 15px;
  text-align: left;
  line-height: 0;
  font-family: 'Roboto Slab', sans-serif;

  @media (max-width: 320px) {
  font-size: 12px;
  }
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin: 25px;
  cursor: pointer;

  @media (max-width: 668px) {
    width: 100px;
    height: 100px;
    padding: 0;
    margin-left: 10px;
    border-radius: 50px;
  }
`;

export const Instructions = styled.p`
font-size: 15px;
text-align: center;
margin-top: 0;
color: rgb(234,70,100);
`;

export const DashboardMainContainer = styled.div`
  width: 82%;
  margin-left: 250px;
  margin-top: 20px;
  padding-bottom: 12px;

  @media (min-width: 320px) and (max-width: 1023px) {
    width: 100%;
    margin-left: 0;
  };
`;

export const MainContentContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 668px) { 
    height: 53vh;
  }
`;

export const RandomFact = styled.h3`
  font-size: 30px;
  text-align: center;
  color: rgb(63,177,181);
  margin: 0;

  @media (max-width: 668px) { 
    font-size: 18px;
  }

  @media (min-width: 669px) and (max-width:1023px) { 
    font-size: 18px;
  }
`;

export const RandomImage = styled.img`
  max-width: 300px;
  max-height: 400px;
  margin: 10px;

  @media (max-width: 668px) { 
    max-width: 200px;
    max-height: 175px;
  }
`;

export const HeaderTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 0;
  text-align: center;
  margin-top: 5px;
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%; 
  width: 300px; 
  position: fixed;
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
  margin-bottom: 40px;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 20px;
  color: rgb(240,96,122);
  border: none;
    &:hover {
      background: rgb(99,195,255);
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
  color: rgb(253,253,253);
  border: none;
    &:hover {
      background: rgb(63,177,181);
      transform: scale(1.1);
      cursor: pointer
    }
`;
