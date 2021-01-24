import styled from 'styled-components';
import rocket from '../assets/rocket.jpg'
import background from '../assets/background.jpg'

export const InputSection = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  font-family:'Roboto', sans-serif;
  background-image: url(${background});
  /* background: rgb(221,243,246);
  background: linear-gradient(165deg, rgba(221,243,246,1) 11%, rgba(200,222,242,1) 78%, rgba(192,201,221,1) 98%); */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  @media (max-width: 668px) {
    background-image: url(${rocket});
    background-size: cover;
    background-position-x:25%;
    background-repeat:no-repeat;
  }
  @media (max-width: 768px) {
    background-image: url(${rocket});
    background-size: cover;
    background-repeat:no-repeat;
  }
`
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
`

export const Title = styled.h1`
  font-family:'Roboto Slab', sans-serif;
  color:rgb(234,70,100);
  font-size: 50px;
  text-align:center;
  letter-spacing: 5px;
  margin-bottom: 40px;
`

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
  color: #fff;
  border: none;
    &:hover {
      background: rgb(240,96,122);
      transform: scale(1.1);
      cursor: pointer
    }
`

export const LandingImage = styled.img`
  box-sizing: border-box;
  width: 60%;
  object-fit: cover;

  @media (max-width: 768px) {
   display:none;
  }
`

export const UserInput = styled.input`
  width: 80%;
  height: 40px;
  margin-bottom: 15px;
  border-radius:20px;
  font-size: 20px;
  text-align: center;
  border:none;
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5);
`

export const InputLabel = styled.label`
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
`

export const SubTitle = styled.h2`
  font-family:'Roboto Slab', sans-serif;
  color:rgb(234,70,100);
  font-size: 30px;
  letter-spacing:1px;
  text-align:center;
  margin-bottom:0;
  margin-top: 60px;
`