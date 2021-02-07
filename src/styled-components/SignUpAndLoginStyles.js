import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import rocket from '../assets/rocket.jpg';
import background from '../assets/background.jpg';

export const InputSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  font-family:'Roboto', sans-serif;
  background-image: url(${background});
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 668px) {
    background-image: url(${rocket});
    background-size: cover;
    background-position-x: 25%;
    background-repeat: no-repeat;
  }
  @media (max-width: 768px) {
    background-image: url(${rocket});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const Form = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 20px;
  margin-bottom: 30px;
  margin: 10px;
  
  @media (max-width: 768px) {
    width: 100%;
    background-color: rgb(207,236,243, 0.8); 
    border-radius:16px;
  }
`;

export const Button = styled.button`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  width: 230px;
  height: 50px;
  border-radius: 20px;
  padding: 10px;
  margin-top: 20px;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 20px;
  background: rgb(63,177,181);
  color: rgb(253,253,253);
  border: none;
    &:hover {
      background: rgb(240,96,122);
      transform: scale(1.1);
      cursor: pointer
    }
`;

export const ButtonLink = styled(Link)`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-self: center;
  text-align: center;
  width: 230px;
  height: 50px;
  border-radius: 20px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 20px;
  background: rgb(63,177,181);
  color: rgb(253,253,253);
  border: none;
  text-decoration:none;
  
    &:hover {
      background: rgb(240,96,122);
      transform: scale(1.1);
      cursor: pointer;
  }
`;

export const AboutPageButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-self: center;
  text-align: center;
  border-radius: 20px;
  padding: 10px;
  margin-top: 70px;
  margin-bottom: 10px;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 20px;
  background: rgb(89,182,240);
  color: rgb(253,253,253);
  border: none;
  text-decoration: none;
  
    &:hover {
      background: rgb(240,96,122);
      cursor: pointer;
  }
`;

export const LandingImage = styled.img`
  box-sizing: border-box;
  width: 60%;
  object-fit: cover;

  @media (max-width: 768px) {
   display: none;
  }
`;

export const UserInput = styled.input`
  width: 80%;
  height: 40px;
  margin-bottom: 15px;
  border-radius: 20px;
  font-size: 20px;
  text-align: center;
  border: none;
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5);
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  font-family: 'Roboto Slab', sans-serif;
  color: rgb(64,137,204);
  font-weight: 500;
  font-size: 25px;
  border-radius: 20px;
  margin: 10px;
`;
