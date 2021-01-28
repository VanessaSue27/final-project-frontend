import styled from 'styled-components';

export const EntriesSection = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

export const EntryCard = styled.div` 
  width: 90%;
  font-size: 16px;
  border-radius: 16px;
  margin: 10px;
  padding: 20px;
  text-align:left;
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5);
`;

export const EntriesTitle = styled.h3`
  font-size: 40px;
  color: rgb(240,96,122);
  margin-top: 10px;
  margin-bottom:0;
`;

export const DeleteButton = styled.button`
  display: inline-block;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  padding: 8px;
  margin-left: 95%;
  font-size: 20px;
  background: rgb(209,209,209);
  color: #fff;
  transform: translate(50% 50%);
  border: none;
    &:hover {
      background: rgb(240,96,122);
      transform: scale(1.1);
      cursor: pointer
    }

`;
