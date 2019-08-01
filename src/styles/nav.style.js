import styled from 'styled-components';
import { mainBlue } from './styleVars.style';

const NavStyle = styled.nav `
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 15px;
  height: 30px;
  
  form button {
    height: 18px;
    margin-right: 10px;
  }
  
  input {
    height: 18px;
    width: 180px;
    margin-right: 10px;
  }
  
  form {
    display: flex;
    align-items: center;
  }

  button {
    background-color: black;
    border: none;
    padding: 0;
  }

  h1 {
    text-decoration: none;
    color: ${mainBlue};
    margin: 0;
    font-size: 24px;
  }

  a {
    text-decoration: none;
    color: ${mainBlue};
    font-size: 18px;
  }

  datalist {
    max-height: 200px;
  }
`;

export {
  NavStyle
};
