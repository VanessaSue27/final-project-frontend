import styled from 'styled-components';

import background from '../assets/background.jpg';

export const FormSection = styled.div`
  width: 100%;
  height:100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  font-family:'Roboto Slab', sans-serif;
  position: absolute;
`;

export const UserForm = styled.form`
  width: 80%;
  height:fit-content;
  background-color: rgb(203,214,226, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 20px;
  margin: 10px;
  -webkit-box-shadow: 2px 2px 17px 9px rgba(114, 114, 114, 0.1); 
  box-shadow: 2px 2px 17px 9px rgba(114,114,114,0.1);
  transform: translate(0%, 5%);
`;

export const SubTitle = styled.h2`
  font-family:'Roboto Slab', sans-serif;
  color:rgb(234,70,100);
  font-size: 30px;
  letter-spacing:1px;
  text-align:center;
  margin-bottom:0;
  margin-top: 60px;
`;

export const Title = styled.h1`
  font-family:'Roboto Slab', sans-serif;
  color:rgb(234,70,100);
  font-size: 50px;
  text-align:center;
  letter-spacing: 5px;
  margin-bottom: 40px;
`;

export const InputField = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  margin-top: 10px;
  border-radius:10px;
  font-size: 15px;
  text-align: center;
  border:none;
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5);
`;

export const Dropdown = styled.select`
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  margin-top: 10px;
  border-radius:10px;
  font-size: 20px;
  text-align: center;
  border:none;
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5);
`;

export const SubmitButton = styled.button`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  width: 230px;
  height: 50px;
  border-radius: 20px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom:40px;
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

export const FormLabel = styled.label`
  display:flex;
  flex-direction: column;
  text-align:center;
  box-sizing: border-box;
  font-family: 'Roboto Slab', sans-serif;
  color:rgb(64,137,204);
  font-weight:500;
  font-size:25px;
  border-radius: 20px;
  margin: 10px;
`;