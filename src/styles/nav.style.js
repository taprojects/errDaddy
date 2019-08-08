import styled from 'styled-components';
import { mainBlue, offWhite, saira, aldrich } from './styleVars.style';

const NavStyle = styled.nav `
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 15px;
  height: 30px;
  min-width: 825px;
  
  form button {
    height: 18px;
    margin-right: 10px;
  }
  
  input {
    height: 24px;
    width: 200px;
    margin-right: 10px;
    border: 2px solid black;
    background-color: ${offWhite};
    font-family: ${aldrich};
    text-align: center;
    font-size: 14px;
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
    font-size: 42px;
    font-weight:  bold;
    width: 200px;
    font-family: ${saira};
  }

  h1: hover {
    curser: pointer;
    color: red;
    font-size: 265%;
    transition: 0.1s;
  }

  a {
    text-decoration: none;
    color: ${mainBlue};
    font-size: 24px;
    font-family: ${saira};
  }

  p {
    margin: 0;
    margin-right: 20px;
    width: 100px;
    text-align: right;
  }

  p: hover {
    color: red;
    font-size: 103%;
    transition: 0.1s
  }

  datalist {
    max-height: 200px;
  }
`;

export {
  NavStyle
};
