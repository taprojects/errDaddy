import styled from 'styled-components';
import { offWhite, aldrich } from './styleVars.style';

const PagingStyle = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: ${aldrich};

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

`;

export { PagingStyle };
