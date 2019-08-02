import styled from 'styled-components';
import { mainBlue, offWhite } from './styleVars.style';

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
    background-color: ${offWhite};
  }
  
  form {
    display: flex;
    align-items: center;
  }

  button {
    background-color: black;
    border: none;
    padding: 0;
    margin-left: 20px;
  }

  h1 {
    text-decoration: none;
    color: ${mainBlue};
    margin: 0;
    font-size: 24px;
    font-family: 'Times New Roman', Times, serif;
    font-weight:  bold;
    width: 60px;
  }

  h1: hover {
    color: red;
    font-size: 220%;
    transition: 0.1s
  }

  a {
    text-decoration: none;
    color: ${mainBlue};
    font-size: 18px;
  }

  p {
    margin-right: 20px;
  }

  p: hover {
    color: red;
    font-size: 102%;
    transition: 0.1s
  }

  datalist {
    max-height: 200px;
  }
`;

export {
  NavStyle
};
