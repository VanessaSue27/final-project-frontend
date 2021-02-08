import styled from 'styled-components/macro';
import background from '../assets/background.jpg';

export const Section = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family:'Roboto Slab', sans-serif;
`;

export const UserForm = styled.form`
  width: 60%;
  display: flex;
  background-color: rgb(203,214,226, 0.6);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 20px;
  -webkit-box-shadow: 2px 2px 17px 9px rgba(114, 114, 114, 0.1); 
  box-shadow: 2px 2px 17px 9px rgba(114,114,114,0.1);

  @media (max-width: 668px) { 
    width: 100%;
    height: 100%;
    margin-top: 0;
  }
`;

export const Title = styled.h1`
  font-family: 'Roboto Slab', sans-serif;
  color: rgb(234,70,100);
  font-size: 45px;
  text-align: center;
  padding: 5px;
  margin-top: 20px;
  margin-bottom: 10px;

  @media (max-width: 668px) { 
    font-size: 25px;
    margin:0;
  }

  @media (min-width: 768px) and (max-width:1023px) { 
    font-size: 30px;
  }
`;

export const SubTitle = styled.h2`
  font-family: 'Roboto Slab', sans-serif;
  color: rgb(234,70,100);
  font-size: 30px;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 0;
  margin-top: 30px;

  @media (max-width: 668px) { 
    font-size: 20px;
    margin-top: 10px;
  }
`;

export const InputField = styled.input`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  border-radius: 10px;
  font-size: 20px;
  text-align: center;
  border: none;
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5);
`;

export const Dropdown = styled.select`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  border-radius:10px;
  font-size: 20px;
  text-align: center;
  border: none;
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5);

  @media (max-width: 668px) { 
    font-size: 14px;
  }
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
  margin-bottom: 20px;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 20px;
  background: rgb(240,96,122);
  color: rgb(253,253,253);
  border: none;
    &:hover {
      background: rgb(63,177,181);
      cursor: pointer
    }

   @media (min-width: 320px) and (max-width: 1023px) {
     width: 90%;
     margin-top: 10px;
     margin-bottom: 20px;
     padding:5px;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  font-family: 'Roboto Slab', sans-serif;
  color: rgb(64,137,204);
  font-weight: 500;
  font-size: 20px;
  border-radius: 20px;
  margin: 10px;

  @media (max-width: 668px){
    font-size: 15px;
  };

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 20px;
  }
`;

export const ErrorMessage = styled.p`
  width: 90%;
  font-size: 20px;
  font-family: 'Roboto Slab', sans-serif;
  font-weight: 500;
  text-align: center;
  color: rgb(255,255,255);
  background-color: rgb(234,70,100, 0.8);
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5);
  border-radius: 16px;
  padding: 8px;
  margin: 0;

  @media (max-width: 668px) {
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 0;
    padding: 5px;
  }

  @media (min-width: 768px) and (max-width: 1023px){
    font-size: 15px;
    margin-top: 20px;
    margin-bottom: 0;
    padding: 5px;
  }
`;

export const ImageErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 45%;
  font-size: 15px;
  margin-left: 10%;
  margin-top: 10px;
  font-family: 'Roboto Slab', sans-serif;
  text-align: center;
  color: rgb(255,255,255);
  background-color: rgb(234,70,100, 0.8);
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5);
  border-radius: 16px;
  padding: 5px;

  @media (max-width: 668px) {
    width: 90%;
    margin-bottom: 0;
    margin-top: 5px;
    margin-left: 15px;
  }

  @media (min-width: 669px) and (max-width: 1023px) { 
   width: 55%;
   margin-left: 5%;
  }
`;

export const UploadButton = styled.button`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  width: 120px;
  height: 25px;
  border-radius: 20px;
  margin-left: -145px;
  margin-top: 155px;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 12px;
  background: rgb(240,96,122);
  color: rgb(253,253,253);
  border: none;
    &:hover {
      background: rgb(63,177,181);
      cursor: pointer
    }

  @media (max-width: 668px) {
    width: 100px;
    margin-left: -125px;
    margin-top: 150px;
   }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: -138px;
    margin-top: 155px;
  }
`;

export const MainContainer = styled.div`
  width: 80%;
  display: flex; 
  margin-left: 10%;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 668px){
    width: 100%;
    margin: 0;
  }
`;

export const TextBox = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

export const Text = styled.p`
  font-size: 15px;
  color: rgb(65,87,122);
  padding: 8px;
  margin: 0;
`;

export const AboutPageLink = styled.a`
  text-decoration: none;
  font-size: 18px;
  color: rgb(67,138,204);
  cursor: pointer;

  @media (max-width: 668px){
    font-size: 15px;
   }
`;

export const Divider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 30px;
  background-color: rgb(255,255,255, 0.3);
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5);
  border-radius: 20px;
`;

export const RocketCardImage = styled.img`
  width: 40%;
  padding: 10px;

  @media (max-width: 668px){
    display: none;
   }
`;

export const CardImage = styled.img`
  width: 150px;
  height: 150px;
  padding: 10px;

  @media (max-width: 668px){
    width: 75px;
    height: 75px;
   }
`;

export const PersonalImage = styled.img`
  width: 200px;
  height: 200px;
  padding: 10px;
  border-radius: 120px;

  @media (max-width: 668px){
    width: 100px;
    height: 100px;
   }
`;

export const WeightGraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  text-align: center;
`;
