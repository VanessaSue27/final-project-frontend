import styled from 'styled-components';

export const DailyEntryForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckboxesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  vertical-align: middle;
`;

export const CheckboxLabel = styled.label`
  color: black;
  font-weight: normal;
  font-size: 20px;
  margin-left: 30px;
`;

export const Icon = styled.svg`
fill: none;
stroke: white;
stroke-width: 2px;
`

export const CheckboxInput = styled.div`
  width: 20px;
  height: 20px;
  margin-top:5px;
  background: ${(props) => (props.checked ? '#1ba341' : '#e6e6e6')};
  border-radius: 3px;
  transition: all 150ms;
  cursor: pointer;

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
  };
`;

export const CustomCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;