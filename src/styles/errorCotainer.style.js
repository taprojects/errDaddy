import styled from 'styled-components';
import { aldrich, offWhite } from './styleVars.style';

const ErrorContainerStyle = styled.div `

min-width: 900px;

h2 {
  color: ${offWhite};
  margin-left: 50px;
  font-family: ${aldrich};
}

header {
  display: grid;
  grid-template-columns: 11fr 4fr;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  button {
    height: 22px;
    margin: 5px;
    background-color: ${offWhite};
    border: none;
  }
  
  input {
    height: 20px;
    width: 25px;
    background-color: ${offWhite};
    border: none;
    text-align: center;

    ::placeholder {
      color: black;
    }
  }
}

`;

export {
  ErrorContainerStyle
};
