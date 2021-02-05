import styled from 'styled-components/macro';

export const EntriesSection = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  @media (max-width: 668px) { 
    height: 45vh;
  }

  @media (min-width: 768px) and (max-width: 1023px) { 
    height: 50vh;
  }
`;

export const EntryCard = styled.div` 
  width: 90%;
  font-size: 16px;
  border-radius: 16px;
  margin: 10px;
  padding: 20px;
  text-align: left;
  background-color: rgb(255,255,255, 0.4);
  -webkit-box-shadow: 2px 2px 22px 2px rgba(180,194,216,0.5); 
  box-shadow: 2px 2px 22px 2px rgba(180,194,216,0.5);

  @media (max-width: 668px) { 
    width: 80%;
  }
`;

export const EntriesTitle = styled.h3`
  font-size: 40px;
  color: rgb(240,96,122);
  margin-top: 10px;
  margin-bottom:0;
`;

export const EntriesText = styled.p`
  color: rgb(81,109,153);
  font-size: 18px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: flex-end;

  @media (max-width: 668px) { 
    justify-content: center;
  }
`;

export const DeleteButton = styled.button`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  width: 100px;
  height: 50px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 35px;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 18px;
  background: rgb(240,96,122);
  color: rgb(253,253,253);
  border: none;
  border-radius: 10px;
    &:hover {
      background: rgb(238,55,55);
      cursor: pointer
    }
`;

export const EditButton = styled.button`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  width: 100px;
  height: 50px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 18px;
  background: rgb(63,177,181);
  color: rgb(253,253,253);
  border: none;
  border-radius: 10px;
    &:hover {
      background: rgb(255,178,98);
      cursor: pointer
    }
`;
