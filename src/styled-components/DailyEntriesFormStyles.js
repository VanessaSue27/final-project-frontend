import styled from 'styled-components/macro';

export const DailyEntryForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255,255,255, 0.3);
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5);
  border-radius: 20px;
`;

export const CheckboxesContainer = styled.div`
  width: 300px;
  height: 20%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0;

  @media (max-width: 668px) {
    width: 100%;
    margin-top: 0;
    height: 35%;
    margin-left: 30px;
  };

  @media (min-width: 669px) and (max-width: 1023px) {
    width: 55%;
    height: 45%;
    margin-left: 35px;
  };
`;

export const DailyEntryTitle = styled.h3`
  font-size: 40px;
  color: rgb(240,96,122);
  margin-top: 30px;
  margin-bottom: 20px;

  @media (max-width: 668px) {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 10px;
    text-align: center;
  };

  @media (min-width: 669px) and (max-width: 1023px) {
    margin-bottom: 10px;
  };
`;

export const CheckboxLabel = styled.label`
  color: rgb(63,177,181);
  font-size: 20px;

  @media (max-width: 668px){
    font-size: 15px;
  };
`;

export const DailyReflectionText = styled.p`
  font-size: 20px;
  color: rgb(67,138,204);

  @media (max-width: 668px){
    margin-left: 10px;
    margin-right: 10px;
    font-size: 15px;
    text-align: center;
  };
`;

export const TextArea = styled.textarea`
  width: 90%;
  height: 150px;
  border: none;
  border-radius:10px;
  resize: none;
  text-align: center;
  font-size: 18px;
  font-family: inherit;
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5);

  @media (max-width: 668px) {
    height: 75px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 15px;
  };

  @media (min-width: 669px) and (max-width: 1023px) {
    height: 75px;
  };
`;
