import styled from 'styled-components';

export const DailyEntryForm = styled.form`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content:center;
  flex-direction: column;
  align-items: center;
`;

export const CheckboxesContainer = styled.div`
  width: 51%;
  height: 30%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom:0;

  @media (max-width: 668px) {
    width: 68%;
  };

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 45%;
  };
`;

export const DailyEntryTitle = styled.h3`
  font-size: 40px;
  color: rgb(240,96,122);
  margin-top: 10px;
  margin-bottom:0%;

  @media (max-width: 668px) {
    font-size: 20px;
    margin-top: 15px;
    text-align:center;
  };
`;

export const CheckboxLabel = styled.label`
  color: rgb(63,177,181);
  font-size: 20px;

  @media (max-width: 668px){
    font-size:15px;
  };
`;

export const DailyReflectionText = styled.p`
  font-size: 20px;
  color: rgb(67,138,204);

  @media (max-width: 668px){
    margin-left:10px;
    margin-right:10px;
    font-size:15px;
    text-align:center;
  };
`;

export const TextArea = styled.textarea`
  width: 90%;
  height: 150px;
  border: none;
  border-radius:10px;
  resize: none;
  text-align:center;
  font-size: 18px;
  font-family: inherit;
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5);

  @media (max-width: 668px) {
    height:75px;
    margin-left:10px;
    margin-right:10px;
    font-size:15px;
  };
`;
