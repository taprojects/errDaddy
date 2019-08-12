import styled from 'styled-components';
import { offWhite, aldrich, mainBlue } from './styleVars.style';

const PagingStyle = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  
  button {
    height: 22px;
    margin: 5px;
    background-color: ${offWhite};
    border: none;
    font-family: ${aldrich};
  }
  
  button:hover {
    background-color: red;
  }
  
  input {
    height: 20px;
    width: 25px;
    background-color: ${offWhite};
    border: none;
    font-family: ${aldrich};
    text-align: center;

    ::placeholder {
      color: black;
    }
  }

  input:focus {
    color: ${mainBlue};
  }
`;

export { PagingStyle };
